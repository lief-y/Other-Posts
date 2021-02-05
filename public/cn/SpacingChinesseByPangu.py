import glob, os, pangu

wd = '.'

for filename in glob.iglob(os.path.join(wd, '*.md')):
  with open(filename, 'rb') as file:
    s = file.read()
    new_text = pangu.spacing_text(s)
  with open(filename, "wb") as file:
    file.write(new_text)
  # nwe_content = pangu.spacing_file(filename)
