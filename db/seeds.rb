module FakePostImporter
  def self.import 
    3.times do 
      post = FactoryGirl.create(:post)
      2.times do 
        user = FactoryGirl.create(:user)
        comment = FactoryGirl.create(:comment, :post => post, :user => user)
      end
    end
  end
end

FakePostImporter.import
