module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'lesceramiquesdemanette_db'),
      user: env('DATABASE_USERNAME', 'lesceramiquesdemanette'),
      password: env('DATABASE_PASSWORD', 'XZ9~,M=xBa5L<5ZzDA*,?mK/j$s}>>z['),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
