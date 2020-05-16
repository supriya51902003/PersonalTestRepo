public class BoatSearchForm
{
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes()
    {
        List<BoatType__c> listBoatTypes=[select Id,Name from BoatType__c ORDER BY Name];
        return listBoatTypes;
        
    }
     /*@AuraEnabled
        public static Map<String, String> getSearchOptions() 
        {
                List<BoatType__c> boatTypes = [SELECT Id, Name FROM BoatType__c LIMIT 400];
                Map<String, String> returnMap = new Map<String, String>();
                if(!boatTypes.isEmpty())
                {
                        for(BoatType__c bt: boatTypes)
                        {
                            returnMap.put(bt.Name, bt.Id);
                        }
                }
                return returnMap;
        }*/
        
        
        
        
}