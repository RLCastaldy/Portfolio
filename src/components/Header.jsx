import Content from './Content';

const fullName = {
  name: 'Richard Castaldy',
  description: 'Aspiring Developer'
};

export default function Header() {
  return (
    <div>
        <Content name={fullName.name} description={fullName.description} />
    </div>
  );
}