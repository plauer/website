class Post < ActiveRecord::Base
  has_many :comments

  def snippet
    self.content[0..60] + '...'
  end

  def html_content
    self.content.gsub(/\n/, '</p></p>')
  end

end