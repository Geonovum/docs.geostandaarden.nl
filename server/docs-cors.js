function cors(r) {
  var target = normalizeTarget(r.args.url);
  var prefix = "https://docs.geostandaarden.nl";

  if (!target || target.indexOf(prefix + "/bro/gen/") !== 0) {
    r.return(400, "Invalid url\n");
    return;
  }

  var pathname = target.slice(prefix.length).split(/[?#]/, 1)[0];
  if (!isSafePath(pathname)) {
    r.return(400, "Invalid url\n");
    return;
  }

  r.internalRedirect("/_cors" + pathname);
}

function isSafePath(pathname) {
  if (/[\\\x00-\x1f]/.test(pathname)) return false;
  return pathname.split("/").every(function (segment) {
    return segment !== "." && segment !== "..";
  });
}

function normalizeTarget(target) {
  if (!target) return "";
  try {
    return decodeURIComponent(target);
  } catch (error) {
    return target;
  }
}

export default { cors };
