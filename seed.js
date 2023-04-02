'use strict'

module.exports = async function ({ entities, db, sql }) {
  await entities.movie.save({ input: { title: 'Hello' } })
  await db.query(sql`
    INSERT INTO movies (title) VALUES ('Panico at the disco');
  `)
}
