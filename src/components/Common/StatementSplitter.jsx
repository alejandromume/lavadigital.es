function StatementSplitter({ statement }) {
  let parts = statement.split('<BR>');

  return (
    parts.map((part, i) => (
      <span key={i} style={{ display: 'block' }}>
        {part}
        {i !== parts.length - 1 ? <br /> : null}
      </span>
    ))
  )
}

export default StatementSplitter;