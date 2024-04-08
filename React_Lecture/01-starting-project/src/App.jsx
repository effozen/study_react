import {useState, Fragment} from 'react';
import {EXAMPLES} from "./data";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function HandleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
    </div>);
  }

  return (<>
    <Header/>
    <main>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => HandleSelect('components')} label="Components"></TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => HandleSelect('jsx')} label="JSX"></TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => HandleSelect('props')} label="Props"></TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => HandleSelect('state')} label="State"></TabButton>
        </menu>
        {tabContent}
      </section>
    </main>
  </>);
}

export default App;
