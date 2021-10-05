import app from './main';

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log('🔥 Server started on port ' + PORT);
});
