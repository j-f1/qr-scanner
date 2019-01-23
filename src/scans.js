import React from 'react'

const Scans = ({ scans }) => (
  <section>
    <h2>Scans</h2>
    {scans.length === 0 ? (
      <p>No scans yet</p>
    ) : (
      <ul>
        {scans.map(({ date, content }) => (
          <li key={date}>
            {isURL(content) ? <a href={content} target="_blank">{content}</a> : content}
          </li>
        ))}
      </ul>
    )}
  </section>
)
export default Scans

const isURL = string => {
  try {
    new URL(string)
    return true
  } catch {
    return false
  }
}
