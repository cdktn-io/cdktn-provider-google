# `discoveryEngineSearchEngine` Submodule <a name="`discoveryEngineSearchEngine` Submodule" id="@cdktn/provider-google.discoveryEngineSearchEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineSearchEngine <a name="DiscoveryEngineSearchEngine" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine google_discovery_engine_search_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngine;

DiscoveryEngineSearchEngine.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionId(java.lang.String)
    .dataStoreIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
    .searchEngineConfig(DiscoveryEngineSearchEngineSearchEngineConfig)
//  .appType(java.lang.String)
//  .commonConfig(DiscoveryEngineSearchEngineCommonConfig)
//  .deletionPolicy(java.lang.String)
//  .disableAnalytics(java.lang.Boolean|IResolvable)
//  .features(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .industryVertical(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .knowledgeGraphConfig(DiscoveryEngineSearchEngineKnowledgeGraphConfig)
//  .project(java.lang.String)
//  .timeouts(DiscoveryEngineSearchEngineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The data stores associated with this engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.engineId">engineId</a></code> | <code>java.lang.String</code> | Unique ID to use for Search Engine App. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.searchEngineConfig">searchEngineConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | search_engine_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.appType">appType</a></code> | <code>java.lang.String</code> | This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.commonConfig">commonConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.disableAnalytics">disableAnalytics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable analytics for searches performed on this engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.features">features</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of the feature config for the engine to opt in or opt out of features. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The KMS key to be used to protect this Engine at creation time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.knowledgeGraphConfig">knowledgeGraphConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | knowledge_graph_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#collection_id DiscoveryEngineSearchEngine#collection_id}

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.dataStoreIds"></a>

- *Type:* java.util.List<java.lang.String>

The data stores associated with this engine.

For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#data_store_ids DiscoveryEngineSearchEngine#data_store_ids}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#display_name DiscoveryEngineSearchEngine#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.engineId"></a>

- *Type:* java.lang.String

Unique ID to use for Search Engine App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#engine_id DiscoveryEngineSearchEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#location DiscoveryEngineSearchEngine#location}

---

##### `searchEngineConfig`<sup>Required</sup> <a name="searchEngineConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.searchEngineConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

search_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#search_engine_config DiscoveryEngineSearchEngine#search_engine_config}

---

##### `appType`<sup>Optional</sup> <a name="appType" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.appType"></a>

- *Type:* java.lang.String

This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#app_type DiscoveryEngineSearchEngine#app_type}

---

##### `commonConfig`<sup>Optional</sup> <a name="commonConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.commonConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#common_config DiscoveryEngineSearchEngine#common_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#deletion_policy DiscoveryEngineSearchEngine#deletion_policy}

---

##### `disableAnalytics`<sup>Optional</sup> <a name="disableAnalytics" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.disableAnalytics"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable analytics for searches performed on this engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#disable_analytics DiscoveryEngineSearchEngine#disable_analytics}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.features"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of the feature config for the engine to opt in or opt out of features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#features DiscoveryEngineSearchEngine#features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industryVertical`<sup>Optional</sup> <a name="industryVertical" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.industryVertical"></a>

- *Type:* java.lang.String

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#industry_vertical DiscoveryEngineSearchEngine#industry_vertical}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

The KMS key to be used to protect this Engine at creation time.

Must be set for requests that need to comply with CMEK Org Policy
protections.

If this field is set and processed successfully, the Engine will be
protected by the KMS key, as indicated in the cmek_config field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#kms_key_name DiscoveryEngineSearchEngine#kms_key_name}

---

##### `knowledgeGraphConfig`<sup>Optional</sup> <a name="knowledgeGraphConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.knowledgeGraphConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

knowledge_graph_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#knowledge_graph_config DiscoveryEngineSearchEngine#knowledge_graph_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#timeouts DiscoveryEngineSearchEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putCommonConfig">putCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putKnowledgeGraphConfig">putKnowledgeGraphConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putSearchEngineConfig">putSearchEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetAppType">resetAppType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetCommonConfig">resetCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetDisableAnalytics">resetDisableAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetFeatures">resetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetIndustryVertical">resetIndustryVertical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetKnowledgeGraphConfig">resetKnowledgeGraphConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCommonConfig` <a name="putCommonConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putCommonConfig"></a>

```java
public void putCommonConfig(DiscoveryEngineSearchEngineCommonConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putCommonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

---

##### `putKnowledgeGraphConfig` <a name="putKnowledgeGraphConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putKnowledgeGraphConfig"></a>

```java
public void putKnowledgeGraphConfig(DiscoveryEngineSearchEngineKnowledgeGraphConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putKnowledgeGraphConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

---

##### `putSearchEngineConfig` <a name="putSearchEngineConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putSearchEngineConfig"></a>

```java
public void putSearchEngineConfig(DiscoveryEngineSearchEngineSearchEngineConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putSearchEngineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putTimeouts"></a>

```java
public void putTimeouts(DiscoveryEngineSearchEngineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

---

##### `resetAppType` <a name="resetAppType" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetAppType"></a>

```java
public void resetAppType()
```

##### `resetCommonConfig` <a name="resetCommonConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetCommonConfig"></a>

```java
public void resetCommonConfig()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisableAnalytics` <a name="resetDisableAnalytics" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetDisableAnalytics"></a>

```java
public void resetDisableAnalytics()
```

##### `resetFeatures` <a name="resetFeatures" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetFeatures"></a>

```java
public void resetFeatures()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetId"></a>

```java
public void resetId()
```

##### `resetIndustryVertical` <a name="resetIndustryVertical" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetIndustryVertical"></a>

```java
public void resetIndustryVertical()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetKnowledgeGraphConfig` <a name="resetKnowledgeGraphConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetKnowledgeGraphConfig"></a>

```java
public void resetKnowledgeGraphConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineSearchEngine resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isConstruct"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngine;

DiscoveryEngineSearchEngine.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformElement"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngine;

DiscoveryEngineSearchEngine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformResource"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngine;

DiscoveryEngineSearchEngine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngine;

DiscoveryEngineSearchEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DiscoveryEngineSearchEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DiscoveryEngineSearchEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DiscoveryEngineSearchEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DiscoveryEngineSearchEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineSearchEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference">DiscoveryEngineSearchEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.knowledgeGraphConfig">knowledgeGraphConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference">DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfig">searchEngineConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference">DiscoveryEngineSearchEngineSearchEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference">DiscoveryEngineSearchEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.appTypeInput">appTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfigInput">commonConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIdsInput">dataStoreIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.disableAnalyticsInput">disableAnalyticsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineIdInput">engineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.featuresInput">featuresInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVerticalInput">industryVerticalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.knowledgeGraphConfigInput">knowledgeGraphConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfigInput">searchEngineConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.appType">appType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.disableAnalytics">disableAnalytics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineId">engineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.features">features</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `commonConfig`<sup>Required</sup> <a name="commonConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfig"></a>

```java
public DiscoveryEngineSearchEngineCommonConfigOutputReference getCommonConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference">DiscoveryEngineSearchEngineCommonConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `knowledgeGraphConfig`<sup>Required</sup> <a name="knowledgeGraphConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.knowledgeGraphConfig"></a>

```java
public DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference getKnowledgeGraphConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference">DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `searchEngineConfig`<sup>Required</sup> <a name="searchEngineConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfig"></a>

```java
public DiscoveryEngineSearchEngineSearchEngineConfigOutputReference getSearchEngineConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference">DiscoveryEngineSearchEngineSearchEngineConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeouts"></a>

```java
public DiscoveryEngineSearchEngineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference">DiscoveryEngineSearchEngineTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `appTypeInput`<sup>Optional</sup> <a name="appTypeInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.appTypeInput"></a>

```java
public java.lang.String getAppTypeInput();
```

- *Type:* java.lang.String

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `commonConfigInput`<sup>Optional</sup> <a name="commonConfigInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfigInput"></a>

```java
public DiscoveryEngineSearchEngineCommonConfig getCommonConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

---

##### `dataStoreIdsInput`<sup>Optional</sup> <a name="dataStoreIdsInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIdsInput"></a>

```java
public java.util.List<java.lang.String> getDataStoreIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `disableAnalyticsInput`<sup>Optional</sup> <a name="disableAnalyticsInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.disableAnalyticsInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableAnalyticsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineIdInput"></a>

```java
public java.lang.String getEngineIdInput();
```

- *Type:* java.lang.String

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.featuresInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFeaturesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `industryVerticalInput`<sup>Optional</sup> <a name="industryVerticalInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVerticalInput"></a>

```java
public java.lang.String getIndustryVerticalInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `knowledgeGraphConfigInput`<sup>Optional</sup> <a name="knowledgeGraphConfigInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.knowledgeGraphConfigInput"></a>

```java
public DiscoveryEngineSearchEngineKnowledgeGraphConfig getKnowledgeGraphConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `searchEngineConfigInput`<sup>Optional</sup> <a name="searchEngineConfigInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfigInput"></a>

```java
public DiscoveryEngineSearchEngineSearchEngineConfig getSearchEngineConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeoutsInput"></a>

```java
public IResolvable|DiscoveryEngineSearchEngineTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

---

##### `appType`<sup>Required</sup> <a name="appType" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.appType"></a>

```java
public java.lang.String getAppType();
```

- *Type:* java.lang.String

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIds"></a>

```java
public java.util.List<java.lang.String> getDataStoreIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `disableAnalytics`<sup>Required</sup> <a name="disableAnalytics" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.disableAnalytics"></a>

```java
public java.lang.Boolean|IResolvable getDisableAnalytics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.features"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFeatures();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineSearchEngineCommonConfig <a name="DiscoveryEngineSearchEngineCommonConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineCommonConfig;

DiscoveryEngineSearchEngineCommonConfig.builder()
//  .companyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig.property.companyName">companyName</a></code> | <code>java.lang.String</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#company_name DiscoveryEngineSearchEngine#company_name}

---

### DiscoveryEngineSearchEngineConfig <a name="DiscoveryEngineSearchEngineConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineConfig;

DiscoveryEngineSearchEngineConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionId(java.lang.String)
    .dataStoreIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
    .searchEngineConfig(DiscoveryEngineSearchEngineSearchEngineConfig)
//  .appType(java.lang.String)
//  .commonConfig(DiscoveryEngineSearchEngineCommonConfig)
//  .deletionPolicy(java.lang.String)
//  .disableAnalytics(java.lang.Boolean|IResolvable)
//  .features(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .industryVertical(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .knowledgeGraphConfig(DiscoveryEngineSearchEngineKnowledgeGraphConfig)
//  .project(java.lang.String)
//  .timeouts(DiscoveryEngineSearchEngineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The data stores associated with this engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.engineId">engineId</a></code> | <code>java.lang.String</code> | Unique ID to use for Search Engine App. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.searchEngineConfig">searchEngineConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | search_engine_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.appType">appType</a></code> | <code>java.lang.String</code> | This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.disableAnalytics">disableAnalytics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable analytics for searches performed on this engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.features">features</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of the feature config for the engine to opt in or opt out of features. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The KMS key to be used to protect this Engine at creation time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.knowledgeGraphConfig">knowledgeGraphConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | knowledge_graph_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#collection_id DiscoveryEngineSearchEngine#collection_id}

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dataStoreIds"></a>

```java
public java.util.List<java.lang.String> getDataStoreIds();
```

- *Type:* java.util.List<java.lang.String>

The data stores associated with this engine.

For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#data_store_ids DiscoveryEngineSearchEngine#data_store_ids}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#display_name DiscoveryEngineSearchEngine#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

Unique ID to use for Search Engine App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#engine_id DiscoveryEngineSearchEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#location DiscoveryEngineSearchEngine#location}

---

##### `searchEngineConfig`<sup>Required</sup> <a name="searchEngineConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.searchEngineConfig"></a>

```java
public DiscoveryEngineSearchEngineSearchEngineConfig getSearchEngineConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

search_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#search_engine_config DiscoveryEngineSearchEngine#search_engine_config}

---

##### `appType`<sup>Optional</sup> <a name="appType" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.appType"></a>

```java
public java.lang.String getAppType();
```

- *Type:* java.lang.String

This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#app_type DiscoveryEngineSearchEngine#app_type}

---

##### `commonConfig`<sup>Optional</sup> <a name="commonConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.commonConfig"></a>

```java
public DiscoveryEngineSearchEngineCommonConfig getCommonConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#common_config DiscoveryEngineSearchEngine#common_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#deletion_policy DiscoveryEngineSearchEngine#deletion_policy}

---

##### `disableAnalytics`<sup>Optional</sup> <a name="disableAnalytics" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.disableAnalytics"></a>

```java
public java.lang.Boolean|IResolvable getDisableAnalytics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable analytics for searches performed on this engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#disable_analytics DiscoveryEngineSearchEngine#disable_analytics}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.features"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFeatures();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of the feature config for the engine to opt in or opt out of features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#features DiscoveryEngineSearchEngine#features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industryVertical`<sup>Optional</sup> <a name="industryVertical" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#industry_vertical DiscoveryEngineSearchEngine#industry_vertical}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The KMS key to be used to protect this Engine at creation time.

Must be set for requests that need to comply with CMEK Org Policy
protections.

If this field is set and processed successfully, the Engine will be
protected by the KMS key, as indicated in the cmek_config field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#kms_key_name DiscoveryEngineSearchEngine#kms_key_name}

---

##### `knowledgeGraphConfig`<sup>Optional</sup> <a name="knowledgeGraphConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.knowledgeGraphConfig"></a>

```java
public DiscoveryEngineSearchEngineKnowledgeGraphConfig getKnowledgeGraphConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

knowledge_graph_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#knowledge_graph_config DiscoveryEngineSearchEngine#knowledge_graph_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.timeouts"></a>

```java
public DiscoveryEngineSearchEngineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#timeouts DiscoveryEngineSearchEngine#timeouts}

---

### DiscoveryEngineSearchEngineKnowledgeGraphConfig <a name="DiscoveryEngineSearchEngineKnowledgeGraphConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineKnowledgeGraphConfig;

DiscoveryEngineSearchEngineKnowledgeGraphConfig.builder()
//  .cloudKnowledgeGraphTypes(java.util.List<java.lang.String>)
//  .enableCloudKnowledgeGraph(java.lang.Boolean|IResolvable)
//  .enablePrivateKnowledgeGraph(java.lang.Boolean|IResolvable)
//  .featureConfig(DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.cloudKnowledgeGraphTypes">cloudKnowledgeGraphTypes</a></code> | <code>java.util.List<java.lang.String></code> | Specify entity types to support. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enableCloudKnowledgeGraph">enableCloudKnowledgeGraph</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable the Cloud Knowledge Graph for the engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enablePrivateKnowledgeGraph">enablePrivateKnowledgeGraph</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable the Private Knowledge Graph for the engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.featureConfig">featureConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | feature_config block. |

---

##### `cloudKnowledgeGraphTypes`<sup>Optional</sup> <a name="cloudKnowledgeGraphTypes" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.cloudKnowledgeGraphTypes"></a>

```java
public java.util.List<java.lang.String> getCloudKnowledgeGraphTypes();
```

- *Type:* java.util.List<java.lang.String>

Specify entity types to support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#cloud_knowledge_graph_types DiscoveryEngineSearchEngine#cloud_knowledge_graph_types}

---

##### `enableCloudKnowledgeGraph`<sup>Optional</sup> <a name="enableCloudKnowledgeGraph" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enableCloudKnowledgeGraph"></a>

```java
public java.lang.Boolean|IResolvable getEnableCloudKnowledgeGraph();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable the Cloud Knowledge Graph for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#enable_cloud_knowledge_graph DiscoveryEngineSearchEngine#enable_cloud_knowledge_graph}

---

##### `enablePrivateKnowledgeGraph`<sup>Optional</sup> <a name="enablePrivateKnowledgeGraph" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enablePrivateKnowledgeGraph"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrivateKnowledgeGraph();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable the Private Knowledge Graph for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#enable_private_knowledge_graph DiscoveryEngineSearchEngine#enable_private_knowledge_graph}

---

##### `featureConfig`<sup>Optional</sup> <a name="featureConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.featureConfig"></a>

```java
public DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig getFeatureConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

feature_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#feature_config DiscoveryEngineSearchEngine#feature_config}

---

### DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig <a name="DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig;

DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.builder()
//  .disablePrivateKgAutoComplete(java.lang.Boolean|IResolvable)
//  .disablePrivateKgEnrichment(java.lang.Boolean|IResolvable)
//  .disablePrivateKgQueryUiChips(java.lang.Boolean|IResolvable)
//  .disablePrivateKgQueryUnderstanding(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgAutoComplete">disablePrivateKgAutoComplete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable the private KG auto complete for the engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgEnrichment">disablePrivateKgEnrichment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable the private KG enrichment for the engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUiChips">disablePrivateKgQueryUiChips</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable the private KG for query UI chips. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUnderstanding">disablePrivateKgQueryUnderstanding</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable the private KG query understanding for the engine. |

---

##### `disablePrivateKgAutoComplete`<sup>Optional</sup> <a name="disablePrivateKgAutoComplete" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgAutoComplete"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgAutoComplete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable the private KG auto complete for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#disable_private_kg_auto_complete DiscoveryEngineSearchEngine#disable_private_kg_auto_complete}

---

##### `disablePrivateKgEnrichment`<sup>Optional</sup> <a name="disablePrivateKgEnrichment" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgEnrichment"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgEnrichment();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable the private KG enrichment for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#disable_private_kg_enrichment DiscoveryEngineSearchEngine#disable_private_kg_enrichment}

---

##### `disablePrivateKgQueryUiChips`<sup>Optional</sup> <a name="disablePrivateKgQueryUiChips" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUiChips"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgQueryUiChips();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable the private KG for query UI chips.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#disable_private_kg_query_ui_chips DiscoveryEngineSearchEngine#disable_private_kg_query_ui_chips}

---

##### `disablePrivateKgQueryUnderstanding`<sup>Optional</sup> <a name="disablePrivateKgQueryUnderstanding" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUnderstanding"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgQueryUnderstanding();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable the private KG query understanding for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#disable_private_kg_query_understanding DiscoveryEngineSearchEngine#disable_private_kg_query_understanding}

---

### DiscoveryEngineSearchEngineSearchEngineConfig <a name="DiscoveryEngineSearchEngineSearchEngineConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineSearchEngineConfig;

DiscoveryEngineSearchEngineSearchEngineConfig.builder()
//  .requiredSubscriptionTier(java.lang.String)
//  .searchAddOns(java.util.List<java.lang.String>)
//  .searchTier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.requiredSubscriptionTier">requiredSubscriptionTier</a></code> | <code>java.lang.String</code> | The required subscription tier of this engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchAddOns">searchAddOns</a></code> | <code>java.util.List<java.lang.String></code> | The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchTier">searchTier</a></code> | <code>java.lang.String</code> | The search feature tier of this engine. |

---

##### `requiredSubscriptionTier`<sup>Optional</sup> <a name="requiredSubscriptionTier" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.requiredSubscriptionTier"></a>

```java
public java.lang.String getRequiredSubscriptionTier();
```

- *Type:* java.lang.String

The required subscription tier of this engine.

They cannot be modified after engine creation. If the required subscription tier is search, user with higher license tier like assist can still access the standalone app associated with this engine. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_ENTERPRISE_EMERGING", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO", "SUBSCRIPTION_TIER_EDU_EMERGING", "SUBSCRIPTION_TIER_EDU_PRO_EMERGING", "SUBSCRIPTION_TIER_FRONTLINE_STARTER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#required_subscription_tier DiscoveryEngineSearchEngine#required_subscription_tier}

---

##### `searchAddOns`<sup>Optional</sup> <a name="searchAddOns" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchAddOns"></a>

```java
public java.util.List<java.lang.String> getSearchAddOns();
```

- *Type:* java.util.List<java.lang.String>

The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#search_add_ons DiscoveryEngineSearchEngine#search_add_ons}

---

##### `searchTier`<sup>Optional</sup> <a name="searchTier" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchTier"></a>

```java
public java.lang.String getSearchTier();
```

- *Type:* java.lang.String

The search feature tier of this engine.

Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. Default value: "SEARCH_TIER_STANDARD" Possible values: ["SEARCH_TIER_STANDARD", "SEARCH_TIER_ENTERPRISE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#search_tier DiscoveryEngineSearchEngine#search_tier}

---

### DiscoveryEngineSearchEngineTimeouts <a name="DiscoveryEngineSearchEngineTimeouts" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineTimeouts;

DiscoveryEngineSearchEngineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#create DiscoveryEngineSearchEngine#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#delete DiscoveryEngineSearchEngine#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#update DiscoveryEngineSearchEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#create DiscoveryEngineSearchEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#delete DiscoveryEngineSearchEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_search_engine#update DiscoveryEngineSearchEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineSearchEngineCommonConfigOutputReference <a name="DiscoveryEngineSearchEngineCommonConfigOutputReference" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineCommonConfigOutputReference;

new DiscoveryEngineSearchEngineCommonConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resetCompanyName">resetCompanyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompanyName` <a name="resetCompanyName" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resetCompanyName"></a>

```java
public void resetCompanyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyNameInput">companyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyNameInput"></a>

```java
public java.lang.String getCompanyNameInput();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineSearchEngineCommonConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

---


### DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference <a name="DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference;

new DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgAutoComplete">resetDisablePrivateKgAutoComplete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgEnrichment">resetDisablePrivateKgEnrichment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUiChips">resetDisablePrivateKgQueryUiChips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUnderstanding">resetDisablePrivateKgQueryUnderstanding</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisablePrivateKgAutoComplete` <a name="resetDisablePrivateKgAutoComplete" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgAutoComplete"></a>

```java
public void resetDisablePrivateKgAutoComplete()
```

##### `resetDisablePrivateKgEnrichment` <a name="resetDisablePrivateKgEnrichment" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgEnrichment"></a>

```java
public void resetDisablePrivateKgEnrichment()
```

##### `resetDisablePrivateKgQueryUiChips` <a name="resetDisablePrivateKgQueryUiChips" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUiChips"></a>

```java
public void resetDisablePrivateKgQueryUiChips()
```

##### `resetDisablePrivateKgQueryUnderstanding` <a name="resetDisablePrivateKgQueryUnderstanding" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUnderstanding"></a>

```java
public void resetDisablePrivateKgQueryUnderstanding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoCompleteInput">disablePrivateKgAutoCompleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichmentInput">disablePrivateKgEnrichmentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChipsInput">disablePrivateKgQueryUiChipsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstandingInput">disablePrivateKgQueryUnderstandingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoComplete">disablePrivateKgAutoComplete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichment">disablePrivateKgEnrichment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChips">disablePrivateKgQueryUiChips</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstanding">disablePrivateKgQueryUnderstanding</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disablePrivateKgAutoCompleteInput`<sup>Optional</sup> <a name="disablePrivateKgAutoCompleteInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoCompleteInput"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgAutoCompleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disablePrivateKgEnrichmentInput`<sup>Optional</sup> <a name="disablePrivateKgEnrichmentInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichmentInput"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgEnrichmentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disablePrivateKgQueryUiChipsInput`<sup>Optional</sup> <a name="disablePrivateKgQueryUiChipsInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChipsInput"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgQueryUiChipsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disablePrivateKgQueryUnderstandingInput`<sup>Optional</sup> <a name="disablePrivateKgQueryUnderstandingInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstandingInput"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgQueryUnderstandingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disablePrivateKgAutoComplete`<sup>Required</sup> <a name="disablePrivateKgAutoComplete" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoComplete"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgAutoComplete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disablePrivateKgEnrichment`<sup>Required</sup> <a name="disablePrivateKgEnrichment" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichment"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgEnrichment();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disablePrivateKgQueryUiChips`<sup>Required</sup> <a name="disablePrivateKgQueryUiChips" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChips"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgQueryUiChips();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disablePrivateKgQueryUnderstanding`<sup>Required</sup> <a name="disablePrivateKgQueryUnderstanding" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstanding"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgQueryUnderstanding();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

---


### DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference <a name="DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference;

new DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig">putFeatureConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetCloudKnowledgeGraphTypes">resetCloudKnowledgeGraphTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnableCloudKnowledgeGraph">resetEnableCloudKnowledgeGraph</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnablePrivateKnowledgeGraph">resetEnablePrivateKnowledgeGraph</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetFeatureConfig">resetFeatureConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFeatureConfig` <a name="putFeatureConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig"></a>

```java
public void putFeatureConfig(DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

---

##### `resetCloudKnowledgeGraphTypes` <a name="resetCloudKnowledgeGraphTypes" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetCloudKnowledgeGraphTypes"></a>

```java
public void resetCloudKnowledgeGraphTypes()
```

##### `resetEnableCloudKnowledgeGraph` <a name="resetEnableCloudKnowledgeGraph" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnableCloudKnowledgeGraph"></a>

```java
public void resetEnableCloudKnowledgeGraph()
```

##### `resetEnablePrivateKnowledgeGraph` <a name="resetEnablePrivateKnowledgeGraph" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnablePrivateKnowledgeGraph"></a>

```java
public void resetEnablePrivateKnowledgeGraph()
```

##### `resetFeatureConfig` <a name="resetFeatureConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetFeatureConfig"></a>

```java
public void resetFeatureConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfig">featureConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypesInput">cloudKnowledgeGraphTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraphInput">enableCloudKnowledgeGraphInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraphInput">enablePrivateKnowledgeGraphInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfigInput">featureConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypes">cloudKnowledgeGraphTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraph">enableCloudKnowledgeGraph</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraph">enablePrivateKnowledgeGraph</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `featureConfig`<sup>Required</sup> <a name="featureConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfig"></a>

```java
public DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference getFeatureConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference</a>

---

##### `cloudKnowledgeGraphTypesInput`<sup>Optional</sup> <a name="cloudKnowledgeGraphTypesInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypesInput"></a>

```java
public java.util.List<java.lang.String> getCloudKnowledgeGraphTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableCloudKnowledgeGraphInput`<sup>Optional</sup> <a name="enableCloudKnowledgeGraphInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraphInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableCloudKnowledgeGraphInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePrivateKnowledgeGraphInput`<sup>Optional</sup> <a name="enablePrivateKnowledgeGraphInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraphInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrivateKnowledgeGraphInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `featureConfigInput`<sup>Optional</sup> <a name="featureConfigInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfigInput"></a>

```java
public DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig getFeatureConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

---

##### `cloudKnowledgeGraphTypes`<sup>Required</sup> <a name="cloudKnowledgeGraphTypes" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypes"></a>

```java
public java.util.List<java.lang.String> getCloudKnowledgeGraphTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableCloudKnowledgeGraph`<sup>Required</sup> <a name="enableCloudKnowledgeGraph" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraph"></a>

```java
public java.lang.Boolean|IResolvable getEnableCloudKnowledgeGraph();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePrivateKnowledgeGraph`<sup>Required</sup> <a name="enablePrivateKnowledgeGraph" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraph"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrivateKnowledgeGraph();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineSearchEngineKnowledgeGraphConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

---


### DiscoveryEngineSearchEngineSearchEngineConfigOutputReference <a name="DiscoveryEngineSearchEngineSearchEngineConfigOutputReference" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference;

new DiscoveryEngineSearchEngineSearchEngineConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetRequiredSubscriptionTier">resetRequiredSubscriptionTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchAddOns">resetSearchAddOns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchTier">resetSearchTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequiredSubscriptionTier` <a name="resetRequiredSubscriptionTier" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetRequiredSubscriptionTier"></a>

```java
public void resetRequiredSubscriptionTier()
```

##### `resetSearchAddOns` <a name="resetSearchAddOns" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchAddOns"></a>

```java
public void resetSearchAddOns()
```

##### `resetSearchTier` <a name="resetSearchTier" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchTier"></a>

```java
public void resetSearchTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTierInput">requiredSubscriptionTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOnsInput">searchAddOnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTierInput">searchTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTier">requiredSubscriptionTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOns">searchAddOns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTier">searchTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requiredSubscriptionTierInput`<sup>Optional</sup> <a name="requiredSubscriptionTierInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTierInput"></a>

```java
public java.lang.String getRequiredSubscriptionTierInput();
```

- *Type:* java.lang.String

---

##### `searchAddOnsInput`<sup>Optional</sup> <a name="searchAddOnsInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOnsInput"></a>

```java
public java.util.List<java.lang.String> getSearchAddOnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchTierInput`<sup>Optional</sup> <a name="searchTierInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTierInput"></a>

```java
public java.lang.String getSearchTierInput();
```

- *Type:* java.lang.String

---

##### `requiredSubscriptionTier`<sup>Required</sup> <a name="requiredSubscriptionTier" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTier"></a>

```java
public java.lang.String getRequiredSubscriptionTier();
```

- *Type:* java.lang.String

---

##### `searchAddOns`<sup>Required</sup> <a name="searchAddOns" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOns"></a>

```java
public java.util.List<java.lang.String> getSearchAddOns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchTier`<sup>Required</sup> <a name="searchTier" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTier"></a>

```java
public java.lang.String getSearchTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineSearchEngineSearchEngineConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

---


### DiscoveryEngineSearchEngineTimeoutsOutputReference <a name="DiscoveryEngineSearchEngineTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_search_engine.DiscoveryEngineSearchEngineTimeoutsOutputReference;

new DiscoveryEngineSearchEngineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineSearchEngineTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

---



