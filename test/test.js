var common_key, common_message, common_obj;

common_key = "test__wafer";

common_message = "test message";

common_obj = {
  num: 999,
  msg: common_message,
  obj: {
    num: 888
  }
};

test('Wafer objects exist', function() {
  return ok(typeof Wafer === "function", "v2 Wafer exists");
});

test("Simple string storage", function() {
  var w;
  w = new Wafer(common_key);
  w.set(common_message);
  equal(w.get(), common_message);
  w.remove();
  return equal(w.get(), null);
});

test("Simple string storage, chained", function() {
  Wafer(common_key).set(common_message);
  equal(Wafer(common_key).get(), common_message);
  Wafer(common_key).remove();
  return equal(Wafer(common_key).get(), null);
});

test("Object storage", function() {
  var w;
  w = new Wafer(common_key);
  w.set(common_obj);
  equal(w.get().num, common_obj.num);
  equal(w.get().msg, common_obj.msg);
  equal(w.get().obj.num, common_obj.obj.num);
  w.remove();
  return equal(w.get(), null);
});

test("JSON storage", function() {
  var w;
  w = new Wafer(common_key);
  w.set(JSON.stringify(common_obj));
  equal(w.get().num, common_obj.num);
  equal(w.get().msg, common_obj.msg);
  equal(w.get().obj.num, common_obj.obj.num);
  w.remove();
  return equal(w.get(), null);
});
