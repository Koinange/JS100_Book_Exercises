// Original Code: //return foo() ? 'bar' : qux();
//My Answer

if (foo()) {
  return 'bar';
} else {
  return qux();
}