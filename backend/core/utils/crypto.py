from cryptography.fernet import Fernet
from django.db.models.signals import pre_save, post_init
from django.dispatch import receiver
from django.http import JsonResponse
from workspace import settings

# * O fernet é uma opção bem fácil de criptografia de campos que pode ser usado, a lógica da classe
# * tá pronta, só falta mesmo aplicar na hora de criação de objs com campos sensiveis
# * Não precisa mexer agora
chave = Fernet(settings.FERNET_SECRET_KEY)

class cryptografia:
    def __init__(self, model, fields):
        self.model = model
        self.fields = fields

    def handle_encryption_error(request, message, exception):
        response = JsonResponse({
            "msg": message,
            "exception": exception,
            "error": "Ocorreu um problema ao processar seus dados. Tente novamente mais tarde."
        })
        response.status_code = 500
        return response
    
    def encrypt(self):
        @receiver(pre_save, sender=self.model)
        def encrypt_fields(sender, instance, **kwargs):
            campos_sensiveis = self.fields
            for campo in campos_sensiveis:
                valor = getattr(instance, campo)
                if valor:
                    try:
                        encrypted_value = chave.encrypt(str(valor).encode()).decode()
                        setattr(instance, campo, encrypted_value)
                    except Exception as e:
                        self.handle_encryption_error(f"Erro ao criptografar campo {campo}: {e}")

    def decrypt(self):
        def decrypt_fields(data):
            campos_sensiveis = self.fields
            decrypted_data = data.copy()  # Isso funciona porque 'data' aqui é um dicionário, provavelmente vindo de 'model_to_dict'
            for campo in campos_sensiveis:
                valor = decrypted_data.get(campo)
                if valor:
                    try:
                        decrypted_value = chave.decrypt(valor.encode()).decode()
                        decrypted_data[campo] = decrypted_value
                    except Exception as e:
                        print(f"Erro ao descriptografar campo {campo}: {e}")


            