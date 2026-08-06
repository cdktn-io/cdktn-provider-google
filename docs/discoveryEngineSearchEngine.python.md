# `discoveryEngineSearchEngine` Submodule <a name="`discoveryEngineSearchEngine` Submodule" id="@cdktn/provider-google.discoveryEngineSearchEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineSearchEngine <a name="DiscoveryEngineSearchEngine" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine google_discovery_engine_search_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngine(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  data_store_ids: typing.List[str],
  display_name: str,
  engine_id: str,
  location: str,
  search_engine_config: DiscoveryEngineSearchEngineSearchEngineConfig,
  app_type: str = None,
  common_config: DiscoveryEngineSearchEngineCommonConfig = None,
  deletion_policy: str = None,
  disable_analytics: bool | IResolvable = None,
  features: typing.Mapping[str] = None,
  id: str = None,
  industry_vertical: str = None,
  kms_key_name: str = None,
  knowledge_graph_config: DiscoveryEngineSearchEngineKnowledgeGraphConfig = None,
  project: str = None,
  timeouts: DiscoveryEngineSearchEngineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | The data stores associated with this engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.engineId">engine_id</a></code> | <code>str</code> | Unique ID to use for Search Engine App. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.location">location</a></code> | <code>str</code> | Location. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.searchEngineConfig">search_engine_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | search_engine_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.appType">app_type</a></code> | <code>str</code> | This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.commonConfig">common_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.disableAnalytics">disable_analytics</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable analytics for searches performed on this engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.features">features</a></code> | <code>typing.Mapping[str]</code> | A map of the feature config for the engine to opt in or opt out of features. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The KMS key to be used to protect this Engine at creation time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.knowledgeGraphConfig">knowledge_graph_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | knowledge_graph_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.collectionId"></a>

- *Type:* str

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#collection_id DiscoveryEngineSearchEngine#collection_id}

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.dataStoreIds"></a>

- *Type:* typing.List[str]

The data stores associated with this engine.

For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#data_store_ids DiscoveryEngineSearchEngine#data_store_ids}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.displayName"></a>

- *Type:* str

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#display_name DiscoveryEngineSearchEngine#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.engineId"></a>

- *Type:* str

Unique ID to use for Search Engine App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#engine_id DiscoveryEngineSearchEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.location"></a>

- *Type:* str

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#location DiscoveryEngineSearchEngine#location}

---

##### `search_engine_config`<sup>Required</sup> <a name="search_engine_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.searchEngineConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

search_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#search_engine_config DiscoveryEngineSearchEngine#search_engine_config}

---

##### `app_type`<sup>Optional</sup> <a name="app_type" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.appType"></a>

- *Type:* str

This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#app_type DiscoveryEngineSearchEngine#app_type}

---

##### `common_config`<sup>Optional</sup> <a name="common_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.commonConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#common_config DiscoveryEngineSearchEngine#common_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#deletion_policy DiscoveryEngineSearchEngine#deletion_policy}

---

##### `disable_analytics`<sup>Optional</sup> <a name="disable_analytics" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.disableAnalytics"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable analytics for searches performed on this engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#disable_analytics DiscoveryEngineSearchEngine#disable_analytics}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.features"></a>

- *Type:* typing.Mapping[str]

A map of the feature config for the engine to opt in or opt out of features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#features DiscoveryEngineSearchEngine#features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industry_vertical`<sup>Optional</sup> <a name="industry_vertical" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.industryVertical"></a>

- *Type:* str

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#industry_vertical DiscoveryEngineSearchEngine#industry_vertical}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

The KMS key to be used to protect this Engine at creation time.

Must be set for requests that need to comply with CMEK Org Policy
protections.

If this field is set and processed successfully, the Engine will be
protected by the KMS key, as indicated in the cmek_config field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#kms_key_name DiscoveryEngineSearchEngine#kms_key_name}

---

##### `knowledge_graph_config`<sup>Optional</sup> <a name="knowledge_graph_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.knowledgeGraphConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

knowledge_graph_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#knowledge_graph_config DiscoveryEngineSearchEngine#knowledge_graph_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#timeouts DiscoveryEngineSearchEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putCommonConfig">put_common_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putKnowledgeGraphConfig">put_knowledge_graph_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putSearchEngineConfig">put_search_engine_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetAppType">reset_app_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetCommonConfig">reset_common_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetDisableAnalytics">reset_disable_analytics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetFeatures">reset_features</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetIndustryVertical">reset_industry_vertical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetKnowledgeGraphConfig">reset_knowledge_graph_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_common_config` <a name="put_common_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putCommonConfig"></a>

```python
def put_common_config(
  company_name: str = None
) -> None
```

###### `company_name`<sup>Optional</sup> <a name="company_name" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putCommonConfig.parameter.companyName"></a>

- *Type:* str

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#company_name DiscoveryEngineSearchEngine#company_name}

---

##### `put_knowledge_graph_config` <a name="put_knowledge_graph_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putKnowledgeGraphConfig"></a>

```python
def put_knowledge_graph_config(
  cloud_knowledge_graph_types: typing.List[str] = None,
  enable_cloud_knowledge_graph: bool | IResolvable = None,
  enable_private_knowledge_graph: bool | IResolvable = None,
  feature_config: DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig = None
) -> None
```

###### `cloud_knowledge_graph_types`<sup>Optional</sup> <a name="cloud_knowledge_graph_types" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putKnowledgeGraphConfig.parameter.cloudKnowledgeGraphTypes"></a>

- *Type:* typing.List[str]

Specify entity types to support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#cloud_knowledge_graph_types DiscoveryEngineSearchEngine#cloud_knowledge_graph_types}

---

###### `enable_cloud_knowledge_graph`<sup>Optional</sup> <a name="enable_cloud_knowledge_graph" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putKnowledgeGraphConfig.parameter.enableCloudKnowledgeGraph"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable the Cloud Knowledge Graph for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#enable_cloud_knowledge_graph DiscoveryEngineSearchEngine#enable_cloud_knowledge_graph}

---

###### `enable_private_knowledge_graph`<sup>Optional</sup> <a name="enable_private_knowledge_graph" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putKnowledgeGraphConfig.parameter.enablePrivateKnowledgeGraph"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable the Private Knowledge Graph for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#enable_private_knowledge_graph DiscoveryEngineSearchEngine#enable_private_knowledge_graph}

---

###### `feature_config`<sup>Optional</sup> <a name="feature_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putKnowledgeGraphConfig.parameter.featureConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

feature_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#feature_config DiscoveryEngineSearchEngine#feature_config}

---

##### `put_search_engine_config` <a name="put_search_engine_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putSearchEngineConfig"></a>

```python
def put_search_engine_config(
  required_subscription_tier: str = None,
  search_add_ons: typing.List[str] = None,
  search_tier: str = None
) -> None
```

###### `required_subscription_tier`<sup>Optional</sup> <a name="required_subscription_tier" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putSearchEngineConfig.parameter.requiredSubscriptionTier"></a>

- *Type:* str

The required subscription tier of this engine.

They cannot be modified after engine creation. If the required subscription tier is search, user with higher license tier like assist can still access the standalone app associated with this engine. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_ENTERPRISE_EMERGING", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO", "SUBSCRIPTION_TIER_EDU_EMERGING", "SUBSCRIPTION_TIER_EDU_PRO_EMERGING", "SUBSCRIPTION_TIER_FRONTLINE_STARTER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#required_subscription_tier DiscoveryEngineSearchEngine#required_subscription_tier}

---

###### `search_add_ons`<sup>Optional</sup> <a name="search_add_ons" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putSearchEngineConfig.parameter.searchAddOns"></a>

- *Type:* typing.List[str]

The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#search_add_ons DiscoveryEngineSearchEngine#search_add_ons}

---

###### `search_tier`<sup>Optional</sup> <a name="search_tier" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putSearchEngineConfig.parameter.searchTier"></a>

- *Type:* str

The search feature tier of this engine.

Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. Default value: "SEARCH_TIER_STANDARD" Possible values: ["SEARCH_TIER_STANDARD", "SEARCH_TIER_ENTERPRISE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#search_tier DiscoveryEngineSearchEngine#search_tier}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#create DiscoveryEngineSearchEngine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#delete DiscoveryEngineSearchEngine#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#update DiscoveryEngineSearchEngine#update}.

---

##### `reset_app_type` <a name="reset_app_type" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetAppType"></a>

```python
def reset_app_type() -> None
```

##### `reset_common_config` <a name="reset_common_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetCommonConfig"></a>

```python
def reset_common_config() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_disable_analytics` <a name="reset_disable_analytics" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetDisableAnalytics"></a>

```python
def reset_disable_analytics() -> None
```

##### `reset_features` <a name="reset_features" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetFeatures"></a>

```python
def reset_features() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_industry_vertical` <a name="reset_industry_vertical" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetIndustryVertical"></a>

```python
def reset_industry_vertical() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_knowledge_graph_config` <a name="reset_knowledge_graph_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetKnowledgeGraphConfig"></a>

```python
def reset_knowledge_graph_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DiscoveryEngineSearchEngine resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isConstruct"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformElement"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformResource"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DiscoveryEngineSearchEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiscoveryEngineSearchEngine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiscoveryEngineSearchEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineSearchEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfig">common_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference">DiscoveryEngineSearchEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.knowledgeGraphConfig">knowledge_graph_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference">DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfig">search_engine_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference">DiscoveryEngineSearchEngineSearchEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference">DiscoveryEngineSearchEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.appTypeInput">app_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfigInput">common_config_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIdsInput">data_store_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.disableAnalyticsInput">disable_analytics_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineIdInput">engine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.featuresInput">features_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVerticalInput">industry_vertical_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.knowledgeGraphConfigInput">knowledge_graph_config_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfigInput">search_engine_config_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.appType">app_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.disableAnalytics">disable_analytics</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineId">engine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.features">features</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVertical">industry_vertical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `common_config`<sup>Required</sup> <a name="common_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfig"></a>

```python
common_config: DiscoveryEngineSearchEngineCommonConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference">DiscoveryEngineSearchEngineCommonConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `knowledge_graph_config`<sup>Required</sup> <a name="knowledge_graph_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.knowledgeGraphConfig"></a>

```python
knowledge_graph_config: DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference">DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `search_engine_config`<sup>Required</sup> <a name="search_engine_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfig"></a>

```python
search_engine_config: DiscoveryEngineSearchEngineSearchEngineConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference">DiscoveryEngineSearchEngineSearchEngineConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeouts"></a>

```python
timeouts: DiscoveryEngineSearchEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference">DiscoveryEngineSearchEngineTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `app_type_input`<sup>Optional</sup> <a name="app_type_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.appTypeInput"></a>

```python
app_type_input: str
```

- *Type:* str

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `common_config_input`<sup>Optional</sup> <a name="common_config_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfigInput"></a>

```python
common_config_input: DiscoveryEngineSearchEngineCommonConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

---

##### `data_store_ids_input`<sup>Optional</sup> <a name="data_store_ids_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIdsInput"></a>

```python
data_store_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `disable_analytics_input`<sup>Optional</sup> <a name="disable_analytics_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.disableAnalyticsInput"></a>

```python
disable_analytics_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `engine_id_input`<sup>Optional</sup> <a name="engine_id_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineIdInput"></a>

```python
engine_id_input: str
```

- *Type:* str

---

##### `features_input`<sup>Optional</sup> <a name="features_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.featuresInput"></a>

```python
features_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `industry_vertical_input`<sup>Optional</sup> <a name="industry_vertical_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVerticalInput"></a>

```python
industry_vertical_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `knowledge_graph_config_input`<sup>Optional</sup> <a name="knowledge_graph_config_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.knowledgeGraphConfigInput"></a>

```python
knowledge_graph_config_input: DiscoveryEngineSearchEngineKnowledgeGraphConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `search_engine_config_input`<sup>Optional</sup> <a name="search_engine_config_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfigInput"></a>

```python
search_engine_config_input: DiscoveryEngineSearchEngineSearchEngineConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DiscoveryEngineSearchEngineTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

---

##### `app_type`<sup>Required</sup> <a name="app_type" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.appType"></a>

```python
app_type: str
```

- *Type:* str

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIds"></a>

```python
data_store_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `disable_analytics`<sup>Required</sup> <a name="disable_analytics" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.disableAnalytics"></a>

```python
disable_analytics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.features"></a>

```python
features: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineSearchEngineCommonConfig <a name="DiscoveryEngineSearchEngineCommonConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig(
  company_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig.property.companyName">company_name</a></code> | <code>str</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `company_name`<sup>Optional</sup> <a name="company_name" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#company_name DiscoveryEngineSearchEngine#company_name}

---

### DiscoveryEngineSearchEngineConfig <a name="DiscoveryEngineSearchEngineConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  data_store_ids: typing.List[str],
  display_name: str,
  engine_id: str,
  location: str,
  search_engine_config: DiscoveryEngineSearchEngineSearchEngineConfig,
  app_type: str = None,
  common_config: DiscoveryEngineSearchEngineCommonConfig = None,
  deletion_policy: str = None,
  disable_analytics: bool | IResolvable = None,
  features: typing.Mapping[str] = None,
  id: str = None,
  industry_vertical: str = None,
  kms_key_name: str = None,
  knowledge_graph_config: DiscoveryEngineSearchEngineKnowledgeGraphConfig = None,
  project: str = None,
  timeouts: DiscoveryEngineSearchEngineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | The data stores associated with this engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.engineId">engine_id</a></code> | <code>str</code> | Unique ID to use for Search Engine App. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.location">location</a></code> | <code>str</code> | Location. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.searchEngineConfig">search_engine_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | search_engine_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.appType">app_type</a></code> | <code>str</code> | This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.commonConfig">common_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.disableAnalytics">disable_analytics</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable analytics for searches performed on this engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.features">features</a></code> | <code>typing.Mapping[str]</code> | A map of the feature config for the engine to opt in or opt out of features. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The KMS key to be used to protect this Engine at creation time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.knowledgeGraphConfig">knowledge_graph_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | knowledge_graph_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#collection_id DiscoveryEngineSearchEngine#collection_id}

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dataStoreIds"></a>

```python
data_store_ids: typing.List[str]
```

- *Type:* typing.List[str]

The data stores associated with this engine.

For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#data_store_ids DiscoveryEngineSearchEngine#data_store_ids}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#display_name DiscoveryEngineSearchEngine#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

Unique ID to use for Search Engine App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#engine_id DiscoveryEngineSearchEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#location DiscoveryEngineSearchEngine#location}

---

##### `search_engine_config`<sup>Required</sup> <a name="search_engine_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.searchEngineConfig"></a>

```python
search_engine_config: DiscoveryEngineSearchEngineSearchEngineConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

search_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#search_engine_config DiscoveryEngineSearchEngine#search_engine_config}

---

##### `app_type`<sup>Optional</sup> <a name="app_type" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.appType"></a>

```python
app_type: str
```

- *Type:* str

This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#app_type DiscoveryEngineSearchEngine#app_type}

---

##### `common_config`<sup>Optional</sup> <a name="common_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.commonConfig"></a>

```python
common_config: DiscoveryEngineSearchEngineCommonConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#common_config DiscoveryEngineSearchEngine#common_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#deletion_policy DiscoveryEngineSearchEngine#deletion_policy}

---

##### `disable_analytics`<sup>Optional</sup> <a name="disable_analytics" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.disableAnalytics"></a>

```python
disable_analytics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable analytics for searches performed on this engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#disable_analytics DiscoveryEngineSearchEngine#disable_analytics}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.features"></a>

```python
features: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of the feature config for the engine to opt in or opt out of features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#features DiscoveryEngineSearchEngine#features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industry_vertical`<sup>Optional</sup> <a name="industry_vertical" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#industry_vertical DiscoveryEngineSearchEngine#industry_vertical}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The KMS key to be used to protect this Engine at creation time.

Must be set for requests that need to comply with CMEK Org Policy
protections.

If this field is set and processed successfully, the Engine will be
protected by the KMS key, as indicated in the cmek_config field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#kms_key_name DiscoveryEngineSearchEngine#kms_key_name}

---

##### `knowledge_graph_config`<sup>Optional</sup> <a name="knowledge_graph_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.knowledgeGraphConfig"></a>

```python
knowledge_graph_config: DiscoveryEngineSearchEngineKnowledgeGraphConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

knowledge_graph_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#knowledge_graph_config DiscoveryEngineSearchEngine#knowledge_graph_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineSearchEngineTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#timeouts DiscoveryEngineSearchEngine#timeouts}

---

### DiscoveryEngineSearchEngineKnowledgeGraphConfig <a name="DiscoveryEngineSearchEngineKnowledgeGraphConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig(
  cloud_knowledge_graph_types: typing.List[str] = None,
  enable_cloud_knowledge_graph: bool | IResolvable = None,
  enable_private_knowledge_graph: bool | IResolvable = None,
  feature_config: DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.cloudKnowledgeGraphTypes">cloud_knowledge_graph_types</a></code> | <code>typing.List[str]</code> | Specify entity types to support. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enableCloudKnowledgeGraph">enable_cloud_knowledge_graph</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable the Cloud Knowledge Graph for the engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enablePrivateKnowledgeGraph">enable_private_knowledge_graph</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable the Private Knowledge Graph for the engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.featureConfig">feature_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | feature_config block. |

---

##### `cloud_knowledge_graph_types`<sup>Optional</sup> <a name="cloud_knowledge_graph_types" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.cloudKnowledgeGraphTypes"></a>

```python
cloud_knowledge_graph_types: typing.List[str]
```

- *Type:* typing.List[str]

Specify entity types to support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#cloud_knowledge_graph_types DiscoveryEngineSearchEngine#cloud_knowledge_graph_types}

---

##### `enable_cloud_knowledge_graph`<sup>Optional</sup> <a name="enable_cloud_knowledge_graph" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enableCloudKnowledgeGraph"></a>

```python
enable_cloud_knowledge_graph: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable the Cloud Knowledge Graph for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#enable_cloud_knowledge_graph DiscoveryEngineSearchEngine#enable_cloud_knowledge_graph}

---

##### `enable_private_knowledge_graph`<sup>Optional</sup> <a name="enable_private_knowledge_graph" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enablePrivateKnowledgeGraph"></a>

```python
enable_private_knowledge_graph: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable the Private Knowledge Graph for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#enable_private_knowledge_graph DiscoveryEngineSearchEngine#enable_private_knowledge_graph}

---

##### `feature_config`<sup>Optional</sup> <a name="feature_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig.property.featureConfig"></a>

```python
feature_config: DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

feature_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#feature_config DiscoveryEngineSearchEngine#feature_config}

---

### DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig <a name="DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig(
  disable_private_kg_auto_complete: bool | IResolvable = None,
  disable_private_kg_enrichment: bool | IResolvable = None,
  disable_private_kg_query_ui_chips: bool | IResolvable = None,
  disable_private_kg_query_understanding: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgAutoComplete">disable_private_kg_auto_complete</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable the private KG auto complete for the engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgEnrichment">disable_private_kg_enrichment</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable the private KG enrichment for the engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUiChips">disable_private_kg_query_ui_chips</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable the private KG for query UI chips. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUnderstanding">disable_private_kg_query_understanding</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable the private KG query understanding for the engine. |

---

##### `disable_private_kg_auto_complete`<sup>Optional</sup> <a name="disable_private_kg_auto_complete" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgAutoComplete"></a>

```python
disable_private_kg_auto_complete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG auto complete for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#disable_private_kg_auto_complete DiscoveryEngineSearchEngine#disable_private_kg_auto_complete}

---

##### `disable_private_kg_enrichment`<sup>Optional</sup> <a name="disable_private_kg_enrichment" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgEnrichment"></a>

```python
disable_private_kg_enrichment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG enrichment for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#disable_private_kg_enrichment DiscoveryEngineSearchEngine#disable_private_kg_enrichment}

---

##### `disable_private_kg_query_ui_chips`<sup>Optional</sup> <a name="disable_private_kg_query_ui_chips" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUiChips"></a>

```python
disable_private_kg_query_ui_chips: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG for query UI chips.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#disable_private_kg_query_ui_chips DiscoveryEngineSearchEngine#disable_private_kg_query_ui_chips}

---

##### `disable_private_kg_query_understanding`<sup>Optional</sup> <a name="disable_private_kg_query_understanding" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUnderstanding"></a>

```python
disable_private_kg_query_understanding: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG query understanding for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#disable_private_kg_query_understanding DiscoveryEngineSearchEngine#disable_private_kg_query_understanding}

---

### DiscoveryEngineSearchEngineSearchEngineConfig <a name="DiscoveryEngineSearchEngineSearchEngineConfig" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig(
  required_subscription_tier: str = None,
  search_add_ons: typing.List[str] = None,
  search_tier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.requiredSubscriptionTier">required_subscription_tier</a></code> | <code>str</code> | The required subscription tier of this engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchAddOns">search_add_ons</a></code> | <code>typing.List[str]</code> | The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchTier">search_tier</a></code> | <code>str</code> | The search feature tier of this engine. |

---

##### `required_subscription_tier`<sup>Optional</sup> <a name="required_subscription_tier" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.requiredSubscriptionTier"></a>

```python
required_subscription_tier: str
```

- *Type:* str

The required subscription tier of this engine.

They cannot be modified after engine creation. If the required subscription tier is search, user with higher license tier like assist can still access the standalone app associated with this engine. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_ENTERPRISE_EMERGING", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO", "SUBSCRIPTION_TIER_EDU_EMERGING", "SUBSCRIPTION_TIER_EDU_PRO_EMERGING", "SUBSCRIPTION_TIER_FRONTLINE_STARTER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#required_subscription_tier DiscoveryEngineSearchEngine#required_subscription_tier}

---

##### `search_add_ons`<sup>Optional</sup> <a name="search_add_ons" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchAddOns"></a>

```python
search_add_ons: typing.List[str]
```

- *Type:* typing.List[str]

The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#search_add_ons DiscoveryEngineSearchEngine#search_add_ons}

---

##### `search_tier`<sup>Optional</sup> <a name="search_tier" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchTier"></a>

```python
search_tier: str
```

- *Type:* str

The search feature tier of this engine.

Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. Default value: "SEARCH_TIER_STANDARD" Possible values: ["SEARCH_TIER_STANDARD", "SEARCH_TIER_ENTERPRISE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#search_tier DiscoveryEngineSearchEngine#search_tier}

---

### DiscoveryEngineSearchEngineTimeouts <a name="DiscoveryEngineSearchEngineTimeouts" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#create DiscoveryEngineSearchEngine#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#delete DiscoveryEngineSearchEngine#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#update DiscoveryEngineSearchEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#create DiscoveryEngineSearchEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#delete DiscoveryEngineSearchEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#update DiscoveryEngineSearchEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineSearchEngineCommonConfigOutputReference <a name="DiscoveryEngineSearchEngineCommonConfigOutputReference" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resetCompanyName">reset_company_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_company_name` <a name="reset_company_name" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resetCompanyName"></a>

```python
def reset_company_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyNameInput">company_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `company_name_input`<sup>Optional</sup> <a name="company_name_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyNameInput"></a>

```python
company_name_input: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineSearchEngineCommonConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

---


### DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference <a name="DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgAutoComplete">reset_disable_private_kg_auto_complete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgEnrichment">reset_disable_private_kg_enrichment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUiChips">reset_disable_private_kg_query_ui_chips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUnderstanding">reset_disable_private_kg_query_understanding</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_private_kg_auto_complete` <a name="reset_disable_private_kg_auto_complete" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgAutoComplete"></a>

```python
def reset_disable_private_kg_auto_complete() -> None
```

##### `reset_disable_private_kg_enrichment` <a name="reset_disable_private_kg_enrichment" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgEnrichment"></a>

```python
def reset_disable_private_kg_enrichment() -> None
```

##### `reset_disable_private_kg_query_ui_chips` <a name="reset_disable_private_kg_query_ui_chips" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUiChips"></a>

```python
def reset_disable_private_kg_query_ui_chips() -> None
```

##### `reset_disable_private_kg_query_understanding` <a name="reset_disable_private_kg_query_understanding" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUnderstanding"></a>

```python
def reset_disable_private_kg_query_understanding() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoCompleteInput">disable_private_kg_auto_complete_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichmentInput">disable_private_kg_enrichment_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChipsInput">disable_private_kg_query_ui_chips_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstandingInput">disable_private_kg_query_understanding_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoComplete">disable_private_kg_auto_complete</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichment">disable_private_kg_enrichment</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChips">disable_private_kg_query_ui_chips</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstanding">disable_private_kg_query_understanding</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_private_kg_auto_complete_input`<sup>Optional</sup> <a name="disable_private_kg_auto_complete_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoCompleteInput"></a>

```python
disable_private_kg_auto_complete_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_private_kg_enrichment_input`<sup>Optional</sup> <a name="disable_private_kg_enrichment_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichmentInput"></a>

```python
disable_private_kg_enrichment_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_private_kg_query_ui_chips_input`<sup>Optional</sup> <a name="disable_private_kg_query_ui_chips_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChipsInput"></a>

```python
disable_private_kg_query_ui_chips_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_private_kg_query_understanding_input`<sup>Optional</sup> <a name="disable_private_kg_query_understanding_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstandingInput"></a>

```python
disable_private_kg_query_understanding_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_private_kg_auto_complete`<sup>Required</sup> <a name="disable_private_kg_auto_complete" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoComplete"></a>

```python
disable_private_kg_auto_complete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_private_kg_enrichment`<sup>Required</sup> <a name="disable_private_kg_enrichment" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichment"></a>

```python
disable_private_kg_enrichment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_private_kg_query_ui_chips`<sup>Required</sup> <a name="disable_private_kg_query_ui_chips" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChips"></a>

```python
disable_private_kg_query_ui_chips: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_private_kg_query_understanding`<sup>Required</sup> <a name="disable_private_kg_query_understanding" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstanding"></a>

```python
disable_private_kg_query_understanding: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

---


### DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference <a name="DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig">put_feature_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetCloudKnowledgeGraphTypes">reset_cloud_knowledge_graph_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnableCloudKnowledgeGraph">reset_enable_cloud_knowledge_graph</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnablePrivateKnowledgeGraph">reset_enable_private_knowledge_graph</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetFeatureConfig">reset_feature_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_feature_config` <a name="put_feature_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig"></a>

```python
def put_feature_config(
  disable_private_kg_auto_complete: bool | IResolvable = None,
  disable_private_kg_enrichment: bool | IResolvable = None,
  disable_private_kg_query_ui_chips: bool | IResolvable = None,
  disable_private_kg_query_understanding: bool | IResolvable = None
) -> None
```

###### `disable_private_kg_auto_complete`<sup>Optional</sup> <a name="disable_private_kg_auto_complete" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig.parameter.disablePrivateKgAutoComplete"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG auto complete for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#disable_private_kg_auto_complete DiscoveryEngineSearchEngine#disable_private_kg_auto_complete}

---

###### `disable_private_kg_enrichment`<sup>Optional</sup> <a name="disable_private_kg_enrichment" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig.parameter.disablePrivateKgEnrichment"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG enrichment for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#disable_private_kg_enrichment DiscoveryEngineSearchEngine#disable_private_kg_enrichment}

---

###### `disable_private_kg_query_ui_chips`<sup>Optional</sup> <a name="disable_private_kg_query_ui_chips" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig.parameter.disablePrivateKgQueryUiChips"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG for query UI chips.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#disable_private_kg_query_ui_chips DiscoveryEngineSearchEngine#disable_private_kg_query_ui_chips}

---

###### `disable_private_kg_query_understanding`<sup>Optional</sup> <a name="disable_private_kg_query_understanding" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig.parameter.disablePrivateKgQueryUnderstanding"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG query understanding for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_search_engine#disable_private_kg_query_understanding DiscoveryEngineSearchEngine#disable_private_kg_query_understanding}

---

##### `reset_cloud_knowledge_graph_types` <a name="reset_cloud_knowledge_graph_types" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetCloudKnowledgeGraphTypes"></a>

```python
def reset_cloud_knowledge_graph_types() -> None
```

##### `reset_enable_cloud_knowledge_graph` <a name="reset_enable_cloud_knowledge_graph" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnableCloudKnowledgeGraph"></a>

```python
def reset_enable_cloud_knowledge_graph() -> None
```

##### `reset_enable_private_knowledge_graph` <a name="reset_enable_private_knowledge_graph" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnablePrivateKnowledgeGraph"></a>

```python
def reset_enable_private_knowledge_graph() -> None
```

##### `reset_feature_config` <a name="reset_feature_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetFeatureConfig"></a>

```python
def reset_feature_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfig">feature_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypesInput">cloud_knowledge_graph_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraphInput">enable_cloud_knowledge_graph_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraphInput">enable_private_knowledge_graph_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfigInput">feature_config_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypes">cloud_knowledge_graph_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraph">enable_cloud_knowledge_graph</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraph">enable_private_knowledge_graph</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_config`<sup>Required</sup> <a name="feature_config" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfig"></a>

```python
feature_config: DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference</a>

---

##### `cloud_knowledge_graph_types_input`<sup>Optional</sup> <a name="cloud_knowledge_graph_types_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypesInput"></a>

```python
cloud_knowledge_graph_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_cloud_knowledge_graph_input`<sup>Optional</sup> <a name="enable_cloud_knowledge_graph_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraphInput"></a>

```python
enable_cloud_knowledge_graph_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_private_knowledge_graph_input`<sup>Optional</sup> <a name="enable_private_knowledge_graph_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraphInput"></a>

```python
enable_private_knowledge_graph_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `feature_config_input`<sup>Optional</sup> <a name="feature_config_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfigInput"></a>

```python
feature_config_input: DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

---

##### `cloud_knowledge_graph_types`<sup>Required</sup> <a name="cloud_knowledge_graph_types" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypes"></a>

```python
cloud_knowledge_graph_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_cloud_knowledge_graph`<sup>Required</sup> <a name="enable_cloud_knowledge_graph" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraph"></a>

```python
enable_cloud_knowledge_graph: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_private_knowledge_graph`<sup>Required</sup> <a name="enable_private_knowledge_graph" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraph"></a>

```python
enable_private_knowledge_graph: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineSearchEngineKnowledgeGraphConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineKnowledgeGraphConfig">DiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

---


### DiscoveryEngineSearchEngineSearchEngineConfigOutputReference <a name="DiscoveryEngineSearchEngineSearchEngineConfigOutputReference" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetRequiredSubscriptionTier">reset_required_subscription_tier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchAddOns">reset_search_add_ons</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchTier">reset_search_tier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_required_subscription_tier` <a name="reset_required_subscription_tier" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetRequiredSubscriptionTier"></a>

```python
def reset_required_subscription_tier() -> None
```

##### `reset_search_add_ons` <a name="reset_search_add_ons" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchAddOns"></a>

```python
def reset_search_add_ons() -> None
```

##### `reset_search_tier` <a name="reset_search_tier" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchTier"></a>

```python
def reset_search_tier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTierInput">required_subscription_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOnsInput">search_add_ons_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTierInput">search_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTier">required_subscription_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOns">search_add_ons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTier">search_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `required_subscription_tier_input`<sup>Optional</sup> <a name="required_subscription_tier_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTierInput"></a>

```python
required_subscription_tier_input: str
```

- *Type:* str

---

##### `search_add_ons_input`<sup>Optional</sup> <a name="search_add_ons_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOnsInput"></a>

```python
search_add_ons_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_tier_input`<sup>Optional</sup> <a name="search_tier_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTierInput"></a>

```python
search_tier_input: str
```

- *Type:* str

---

##### `required_subscription_tier`<sup>Required</sup> <a name="required_subscription_tier" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTier"></a>

```python
required_subscription_tier: str
```

- *Type:* str

---

##### `search_add_ons`<sup>Required</sup> <a name="search_add_ons" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOns"></a>

```python
search_add_ons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_tier`<sup>Required</sup> <a name="search_tier" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTier"></a>

```python
search_tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineSearchEngineSearchEngineConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

---


### DiscoveryEngineSearchEngineTimeoutsOutputReference <a name="DiscoveryEngineSearchEngineTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_search_engine

discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineSearchEngineTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

---



