from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.utils.deconstruct import deconstructible
import re

@deconstructible
class RgValidator:
    pattern = r"^\d{1,2}\.\d{3}\.\d{3}-[\dXx]$"

    def __call__(self, value):
        if not re.match(self.pattern, value):
            raise ValidationError(
                _('Invalid RG number. Expected format: XX.XXX.XXX-X'),
                params={'value': value},
            )
@deconstructible
class CPFValidator:
    pattern = r"^\d{3}\.\d{3}\.\d{3}\-\d{2}$"

    def __call__(self, value):
        if not re.match(self.pattern, value):
            raise ValidationError(
                _('Invalid CPF number. Expected format: XXX.XXX.XXX-XX'),
                params={'value': value},
            )
@deconstructible 
class PISValidator:
    pattern = r"^\d{3}\.\d{5}\.\d{2}\-\d{1}$"

    def __call__(self, value):
        if not re.match(self.pattern, value):
            raise ValidationError(
                _('Invalid PIS number. Expected format: XXX.XXXXX.XX-X'),
                params={'value': value},
            )