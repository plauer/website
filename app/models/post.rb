class Post < ActiveRecord::Base
  has_many :comments
  def snippet
    self.content[0..60] + '...'
  end

end