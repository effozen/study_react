import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props) {
  return <header>
    <h1><a href="/" onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>;
}

function Nav(props) {
  const {topics} = props;
  const list = [];
  topics.forEach(e => {
    list.push(
      <li key={e.id}>
        <a id={e.id} href={`/read/${e.id}`} onClick={(event) => {
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>{e.title}</a>
      </li>); // 반복문 안에서 고유하면 된다.
  });

  return <nav>
    <ol>
      {list}
    </ol>
  </nav>;
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>;
}

function Create(props) {
  return <article>
    <h2>Create</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"/></p>
    </form>
  </article>;
}

function Update(props) {
  return <article>
    <h2>Update</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title" value={props.title}/></p>
      <p><textarea name="body" placeholder="body" value={props.body}></textarea></p>
      <p><input type="submit" value="Update"/></p>
    </form>
  </article>;
}

function App() {
  // const _mode = useState("WELCOME");
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
    {id: 3, title: 'js', body: 'js is ...'},
  ]);

  let content = null;
  let contextControl = null;


  if (mode === "WELCOME") {
    content = <Article title="WELCOME" body="Hello, WEB"></Article>;
  } else if (mode === "READ") {
    for (let i = 0; i < topics.length; i++) {
      let title, body = null;
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
    contextControl = <li><a href={"/update/" + id} onClick={event => {
      event.preventDefault();
      setMode('UPDATE');
    }
    }>Update</a></li>;
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(title, body) => {
      const newTopic = {id: nextId, title: title, body: body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>;
  } else if (mode === 'UPDATE') {
    for (let i = 0; i < topics.length; i++) {
      let title, body = null;
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    content = <Update title={title} body={body} onUpdate={(title, body) => {

    }}></Update>
  }


  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode("READ");
        setId(_id);
      }}></Nav>
      {content}
      <ul>
        <li><a href="/create" onClick={event => {
          event.preventDefault();
          setMode("CREATE");
        }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
