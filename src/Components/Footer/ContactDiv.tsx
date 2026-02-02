import Button from '../UI/Button';

const ContactDiv = () => {
  return (
    <div className="max-w-xs">
      <p className="ml-1 font-bold max-w-[250px]">Contact</p>
      <p className="ml-1 mt-2 text-sm opacity-80">
        Besoin d’informations ? Écrivez-nous via le formulaire de contact.
      </p>
      <div className="mt-4">
        <Button href="#contact" className="w-full">
          Nous contacter
        </Button>
      </div>
    </div>
  );
};

export default ContactDiv;
