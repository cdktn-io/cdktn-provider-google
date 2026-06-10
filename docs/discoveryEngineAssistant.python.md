# `discoveryEngineAssistant` Submodule <a name="`discoveryEngineAssistant` Submodule" id="@cdktn/provider-google.discoveryEngineAssistant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineAssistant <a name="DiscoveryEngineAssistant" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant google_discovery_engine_assistant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistant(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  assistant_id: str,
  collection_id: str,
  display_name: str,
  engine_id: str,
  location: str,
  customer_policy: DiscoveryEngineAssistantCustomerPolicy = None,
  deletion_policy: str = None,
  description: str = None,
  generation_config: DiscoveryEngineAssistantGenerationConfig = None,
  id: str = None,
  project: str = None,
  timeouts: DiscoveryEngineAssistantTimeouts = None,
  web_grounding_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.assistantId">assistant_id</a></code> | <code>str</code> | The unique id of the assistant. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The unique id of the collection. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The assistant display name. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.engineId">engine_id</a></code> | <code>str</code> | The unique id of the engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.customerPolicy">customer_policy</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a></code> | customer_policy block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.description">description</a></code> | <code>str</code> | Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.generationConfig">generation_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a></code> | generation_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#id DiscoveryEngineAssistant#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#project DiscoveryEngineAssistant#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.webGroundingType">web_grounding_type</a></code> | <code>str</code> | The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assistant_id`<sup>Required</sup> <a name="assistant_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.assistantId"></a>

- *Type:* str

The unique id of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#assistant_id DiscoveryEngineAssistant#assistant_id}

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.collectionId"></a>

- *Type:* str

The unique id of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#collection_id DiscoveryEngineAssistant#collection_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.displayName"></a>

- *Type:* str

The assistant display name.

It must be a UTF-8 encoded string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#display_name DiscoveryEngineAssistant#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.engineId"></a>

- *Type:* str

The unique id of the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#engine_id DiscoveryEngineAssistant#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#location DiscoveryEngineAssistant#location}

---

##### `customer_policy`<sup>Optional</sup> <a name="customer_policy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.customerPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a>

customer_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#customer_policy DiscoveryEngineAssistant#customer_policy}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#deletion_policy DiscoveryEngineAssistant#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.description"></a>

- *Type:* str

Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#description DiscoveryEngineAssistant#description}

---

##### `generation_config`<sup>Optional</sup> <a name="generation_config" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.generationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a>

generation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#generation_config DiscoveryEngineAssistant#generation_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#id DiscoveryEngineAssistant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#project DiscoveryEngineAssistant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#timeouts DiscoveryEngineAssistant#timeouts}

---

##### `web_grounding_type`<sup>Optional</sup> <a name="web_grounding_type" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.webGroundingType"></a>

- *Type:* str

The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#web_grounding_type DiscoveryEngineAssistant#web_grounding_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putCustomerPolicy">put_customer_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putGenerationConfig">put_generation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetCustomerPolicy">reset_customer_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetGenerationConfig">reset_generation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetWebGroundingType">reset_web_grounding_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_customer_policy` <a name="put_customer_policy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putCustomerPolicy"></a>

```python
def put_customer_policy(
  banned_phrases: IResolvable | typing.List[DiscoveryEngineAssistantCustomerPolicyBannedPhrases] = None,
  model_armor_config: DiscoveryEngineAssistantCustomerPolicyModelArmorConfig = None
) -> None
```

###### `banned_phrases`<sup>Optional</sup> <a name="banned_phrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putCustomerPolicy.parameter.bannedPhrases"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]

banned_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#banned_phrases DiscoveryEngineAssistant#banned_phrases}

---

###### `model_armor_config`<sup>Optional</sup> <a name="model_armor_config" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putCustomerPolicy.parameter.modelArmorConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

model_armor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#model_armor_config DiscoveryEngineAssistant#model_armor_config}

---

##### `put_generation_config` <a name="put_generation_config" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putGenerationConfig"></a>

```python
def put_generation_config(
  default_language: str = None,
  system_instruction: DiscoveryEngineAssistantGenerationConfigSystemInstruction = None
) -> None
```

###### `default_language`<sup>Optional</sup> <a name="default_language" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putGenerationConfig.parameter.defaultLanguage"></a>

- *Type:* str

The default language to use for the generation of the assistant response.

Use an ISO 639-1 language code such as 'en'.
If not specified, the language will be automatically detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#default_language DiscoveryEngineAssistant#default_language}

---

###### `system_instruction`<sup>Optional</sup> <a name="system_instruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putGenerationConfig.parameter.systemInstruction"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

system_instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#system_instruction DiscoveryEngineAssistant#system_instruction}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#create DiscoveryEngineAssistant#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#delete DiscoveryEngineAssistant#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#update DiscoveryEngineAssistant#update}.

---

##### `reset_customer_policy` <a name="reset_customer_policy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetCustomerPolicy"></a>

```python
def reset_customer_policy() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_generation_config` <a name="reset_generation_config" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetGenerationConfig"></a>

```python
def reset_generation_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_web_grounding_type` <a name="reset_web_grounding_type" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetWebGroundingType"></a>

```python
def reset_web_grounding_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DiscoveryEngineAssistant resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isConstruct"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformElement"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformResource"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistant.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DiscoveryEngineAssistant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiscoveryEngineAssistant to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiscoveryEngineAssistant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineAssistant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.customerPolicy">customer_policy</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference">DiscoveryEngineAssistantCustomerPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.generationConfig">generation_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference">DiscoveryEngineAssistantGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference">DiscoveryEngineAssistantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.assistantIdInput">assistant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.customerPolicyInput">customer_policy_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.engineIdInput">engine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.generationConfigInput">generation_config_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.webGroundingTypeInput">web_grounding_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.assistantId">assistant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.engineId">engine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.webGroundingType">web_grounding_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `customer_policy`<sup>Required</sup> <a name="customer_policy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.customerPolicy"></a>

```python
customer_policy: DiscoveryEngineAssistantCustomerPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference">DiscoveryEngineAssistantCustomerPolicyOutputReference</a>

---

##### `generation_config`<sup>Required</sup> <a name="generation_config" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.generationConfig"></a>

```python
generation_config: DiscoveryEngineAssistantGenerationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference">DiscoveryEngineAssistantGenerationConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.timeouts"></a>

```python
timeouts: DiscoveryEngineAssistantTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference">DiscoveryEngineAssistantTimeoutsOutputReference</a>

---

##### `assistant_id_input`<sup>Optional</sup> <a name="assistant_id_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.assistantIdInput"></a>

```python
assistant_id_input: str
```

- *Type:* str

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `customer_policy_input`<sup>Optional</sup> <a name="customer_policy_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.customerPolicyInput"></a>

```python
customer_policy_input: DiscoveryEngineAssistantCustomerPolicy
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `engine_id_input`<sup>Optional</sup> <a name="engine_id_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.engineIdInput"></a>

```python
engine_id_input: str
```

- *Type:* str

---

##### `generation_config_input`<sup>Optional</sup> <a name="generation_config_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.generationConfigInput"></a>

```python
generation_config_input: DiscoveryEngineAssistantGenerationConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DiscoveryEngineAssistantTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a>

---

##### `web_grounding_type_input`<sup>Optional</sup> <a name="web_grounding_type_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.webGroundingTypeInput"></a>

```python
web_grounding_type_input: str
```

- *Type:* str

---

##### `assistant_id`<sup>Required</sup> <a name="assistant_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.assistantId"></a>

```python
assistant_id: str
```

- *Type:* str

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `web_grounding_type`<sup>Required</sup> <a name="web_grounding_type" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.webGroundingType"></a>

```python
web_grounding_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineAssistantConfig <a name="DiscoveryEngineAssistantConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistantConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  assistant_id: str,
  collection_id: str,
  display_name: str,
  engine_id: str,
  location: str,
  customer_policy: DiscoveryEngineAssistantCustomerPolicy = None,
  deletion_policy: str = None,
  description: str = None,
  generation_config: DiscoveryEngineAssistantGenerationConfig = None,
  id: str = None,
  project: str = None,
  timeouts: DiscoveryEngineAssistantTimeouts = None,
  web_grounding_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.assistantId">assistant_id</a></code> | <code>str</code> | The unique id of the assistant. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The unique id of the collection. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.displayName">display_name</a></code> | <code>str</code> | The assistant display name. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.engineId">engine_id</a></code> | <code>str</code> | The unique id of the engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.customerPolicy">customer_policy</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a></code> | customer_policy block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.description">description</a></code> | <code>str</code> | Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.generationConfig">generation_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a></code> | generation_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#id DiscoveryEngineAssistant#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#project DiscoveryEngineAssistant#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.webGroundingType">web_grounding_type</a></code> | <code>str</code> | The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assistant_id`<sup>Required</sup> <a name="assistant_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.assistantId"></a>

```python
assistant_id: str
```

- *Type:* str

The unique id of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#assistant_id DiscoveryEngineAssistant#assistant_id}

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The unique id of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#collection_id DiscoveryEngineAssistant#collection_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The assistant display name.

It must be a UTF-8 encoded string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#display_name DiscoveryEngineAssistant#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

The unique id of the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#engine_id DiscoveryEngineAssistant#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#location DiscoveryEngineAssistant#location}

---

##### `customer_policy`<sup>Optional</sup> <a name="customer_policy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.customerPolicy"></a>

```python
customer_policy: DiscoveryEngineAssistantCustomerPolicy
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a>

customer_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#customer_policy DiscoveryEngineAssistant#customer_policy}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#deletion_policy DiscoveryEngineAssistant#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#description DiscoveryEngineAssistant#description}

---

##### `generation_config`<sup>Optional</sup> <a name="generation_config" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.generationConfig"></a>

```python
generation_config: DiscoveryEngineAssistantGenerationConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a>

generation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#generation_config DiscoveryEngineAssistant#generation_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#id DiscoveryEngineAssistant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#project DiscoveryEngineAssistant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineAssistantTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#timeouts DiscoveryEngineAssistant#timeouts}

---

##### `web_grounding_type`<sup>Optional</sup> <a name="web_grounding_type" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.webGroundingType"></a>

```python
web_grounding_type: str
```

- *Type:* str

The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#web_grounding_type DiscoveryEngineAssistant#web_grounding_type}

---

### DiscoveryEngineAssistantCustomerPolicy <a name="DiscoveryEngineAssistantCustomerPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy(
  banned_phrases: IResolvable | typing.List[DiscoveryEngineAssistantCustomerPolicyBannedPhrases] = None,
  model_armor_config: DiscoveryEngineAssistantCustomerPolicyModelArmorConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.property.bannedPhrases">banned_phrases</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]</code> | banned_phrases block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.property.modelArmorConfig">model_armor_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | model_armor_config block. |

---

##### `banned_phrases`<sup>Optional</sup> <a name="banned_phrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.property.bannedPhrases"></a>

```python
banned_phrases: IResolvable | typing.List[DiscoveryEngineAssistantCustomerPolicyBannedPhrases]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]

banned_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#banned_phrases DiscoveryEngineAssistant#banned_phrases}

---

##### `model_armor_config`<sup>Optional</sup> <a name="model_armor_config" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.property.modelArmorConfig"></a>

```python
model_armor_config: DiscoveryEngineAssistantCustomerPolicyModelArmorConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

model_armor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#model_armor_config DiscoveryEngineAssistant#model_armor_config}

---

### DiscoveryEngineAssistantCustomerPolicyBannedPhrases <a name="DiscoveryEngineAssistantCustomerPolicyBannedPhrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases(
  phrase: str,
  ignore_diacritics: bool | IResolvable = None,
  match_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.phrase">phrase</a></code> | <code>str</code> | The raw string content to be banned. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.ignoreDiacritics">ignore_diacritics</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, diacritical marks (e.g., accents, umlauts) are ignored when matching banned phrases. For example, "cafe" would match "café". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.matchType">match_type</a></code> | <code>str</code> | Match type for the banned phrase. The supported values: 'SIMPLE_STRING_MATCH', 'WORD_BOUNDARY_STRING_MATCH'. |

---

##### `phrase`<sup>Required</sup> <a name="phrase" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.phrase"></a>

```python
phrase: str
```

- *Type:* str

The raw string content to be banned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#phrase DiscoveryEngineAssistant#phrase}

---

##### `ignore_diacritics`<sup>Optional</sup> <a name="ignore_diacritics" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.ignoreDiacritics"></a>

```python
ignore_diacritics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, diacritical marks (e.g., accents, umlauts) are ignored when matching banned phrases. For example, "cafe" would match "café".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#ignore_diacritics DiscoveryEngineAssistant#ignore_diacritics}

---

##### `match_type`<sup>Optional</sup> <a name="match_type" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

Match type for the banned phrase. The supported values: 'SIMPLE_STRING_MATCH', 'WORD_BOUNDARY_STRING_MATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#match_type DiscoveryEngineAssistant#match_type}

---

### DiscoveryEngineAssistantCustomerPolicyModelArmorConfig <a name="DiscoveryEngineAssistantCustomerPolicyModelArmorConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig(
  response_template: str,
  user_prompt_template: str,
  failure_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.responseTemplate">response_template</a></code> | <code>str</code> | The resource name of the Model Armor template for sanitizing assistant responses. Format: 'projects/{project}/locations/{location}/templates/{template_id}'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.userPromptTemplate">user_prompt_template</a></code> | <code>str</code> | The resource name of the Model Armor template for sanitizing user prompts. Format: 'projects/{project}/locations/{location}/templates/{template_id}'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.failureMode">failure_mode</a></code> | <code>str</code> | Defines the failure mode for Model Armor sanitization. The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'. |

---

##### `response_template`<sup>Required</sup> <a name="response_template" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.responseTemplate"></a>

```python
response_template: str
```

- *Type:* str

The resource name of the Model Armor template for sanitizing assistant responses. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the assistant
response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#response_template DiscoveryEngineAssistant#response_template}

---

##### `user_prompt_template`<sup>Required</sup> <a name="user_prompt_template" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.userPromptTemplate"></a>

```python
user_prompt_template: str
```

- *Type:* str

The resource name of the Model Armor template for sanitizing user prompts. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the user prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#user_prompt_template DiscoveryEngineAssistant#user_prompt_template}

---

##### `failure_mode`<sup>Optional</sup> <a name="failure_mode" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.failureMode"></a>

```python
failure_mode: str
```

- *Type:* str

Defines the failure mode for Model Armor sanitization. The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#failure_mode DiscoveryEngineAssistant#failure_mode}

---

### DiscoveryEngineAssistantGenerationConfig <a name="DiscoveryEngineAssistantGenerationConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig(
  default_language: str = None,
  system_instruction: DiscoveryEngineAssistantGenerationConfigSystemInstruction = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.property.defaultLanguage">default_language</a></code> | <code>str</code> | The default language to use for the generation of the assistant response. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.property.systemInstruction">system_instruction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | system_instruction block. |

---

##### `default_language`<sup>Optional</sup> <a name="default_language" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.property.defaultLanguage"></a>

```python
default_language: str
```

- *Type:* str

The default language to use for the generation of the assistant response.

Use an ISO 639-1 language code such as 'en'.
If not specified, the language will be automatically detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#default_language DiscoveryEngineAssistant#default_language}

---

##### `system_instruction`<sup>Optional</sup> <a name="system_instruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.property.systemInstruction"></a>

```python
system_instruction: DiscoveryEngineAssistantGenerationConfigSystemInstruction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

system_instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#system_instruction DiscoveryEngineAssistant#system_instruction}

---

### DiscoveryEngineAssistantGenerationConfigSystemInstruction <a name="DiscoveryEngineAssistantGenerationConfigSystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction(
  additional_system_instruction: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction.property.additionalSystemInstruction">additional_system_instruction</a></code> | <code>str</code> | Additional system instruction that will be added to the default system instruction. |

---

##### `additional_system_instruction`<sup>Optional</sup> <a name="additional_system_instruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction.property.additionalSystemInstruction"></a>

```python
additional_system_instruction: str
```

- *Type:* str

Additional system instruction that will be added to the default system instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#additional_system_instruction DiscoveryEngineAssistant#additional_system_instruction}

---

### DiscoveryEngineAssistantTimeouts <a name="DiscoveryEngineAssistantTimeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#create DiscoveryEngineAssistant#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#delete DiscoveryEngineAssistant#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#update DiscoveryEngineAssistant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#create DiscoveryEngineAssistant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#delete DiscoveryEngineAssistant#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#update DiscoveryEngineAssistant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList <a name="DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DiscoveryEngineAssistantCustomerPolicyBannedPhrases]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]

---


### DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference <a name="DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetIgnoreDiacritics">reset_ignore_diacritics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetMatchType">reset_match_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ignore_diacritics` <a name="reset_ignore_diacritics" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetIgnoreDiacritics"></a>

```python
def reset_ignore_diacritics() -> None
```

##### `reset_match_type` <a name="reset_match_type" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetMatchType"></a>

```python
def reset_match_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacriticsInput">ignore_diacritics_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchTypeInput">match_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phraseInput">phrase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacritics">ignore_diacritics</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchType">match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phrase">phrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ignore_diacritics_input`<sup>Optional</sup> <a name="ignore_diacritics_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacriticsInput"></a>

```python
ignore_diacritics_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `match_type_input`<sup>Optional</sup> <a name="match_type_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchTypeInput"></a>

```python
match_type_input: str
```

- *Type:* str

---

##### `phrase_input`<sup>Optional</sup> <a name="phrase_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phraseInput"></a>

```python
phrase_input: str
```

- *Type:* str

---

##### `ignore_diacritics`<sup>Required</sup> <a name="ignore_diacritics" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacritics"></a>

```python
ignore_diacritics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

---

##### `phrase`<sup>Required</sup> <a name="phrase" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phrase"></a>

```python
phrase: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineAssistantCustomerPolicyBannedPhrases
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>

---


### DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference <a name="DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resetFailureMode">reset_failure_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_failure_mode` <a name="reset_failure_mode" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resetFailureMode"></a>

```python
def reset_failure_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureModeInput">failure_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplateInput">response_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplateInput">user_prompt_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureMode">failure_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplate">response_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplate">user_prompt_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_mode_input`<sup>Optional</sup> <a name="failure_mode_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureModeInput"></a>

```python
failure_mode_input: str
```

- *Type:* str

---

##### `response_template_input`<sup>Optional</sup> <a name="response_template_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplateInput"></a>

```python
response_template_input: str
```

- *Type:* str

---

##### `user_prompt_template_input`<sup>Optional</sup> <a name="user_prompt_template_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplateInput"></a>

```python
user_prompt_template_input: str
```

- *Type:* str

---

##### `failure_mode`<sup>Required</sup> <a name="failure_mode" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureMode"></a>

```python
failure_mode: str
```

- *Type:* str

---

##### `response_template`<sup>Required</sup> <a name="response_template" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplate"></a>

```python
response_template: str
```

- *Type:* str

---

##### `user_prompt_template`<sup>Required</sup> <a name="user_prompt_template" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplate"></a>

```python
user_prompt_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineAssistantCustomerPolicyModelArmorConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---


### DiscoveryEngineAssistantCustomerPolicyOutputReference <a name="DiscoveryEngineAssistantCustomerPolicyOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases">put_banned_phrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig">put_model_armor_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resetBannedPhrases">reset_banned_phrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resetModelArmorConfig">reset_model_armor_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_banned_phrases` <a name="put_banned_phrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases"></a>

```python
def put_banned_phrases(
  value: IResolvable | typing.List[DiscoveryEngineAssistantCustomerPolicyBannedPhrases]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]

---

##### `put_model_armor_config` <a name="put_model_armor_config" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig"></a>

```python
def put_model_armor_config(
  response_template: str,
  user_prompt_template: str,
  failure_mode: str = None
) -> None
```

###### `response_template`<sup>Required</sup> <a name="response_template" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig.parameter.responseTemplate"></a>

- *Type:* str

The resource name of the Model Armor template for sanitizing assistant responses. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the assistant
response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#response_template DiscoveryEngineAssistant#response_template}

---

###### `user_prompt_template`<sup>Required</sup> <a name="user_prompt_template" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig.parameter.userPromptTemplate"></a>

- *Type:* str

The resource name of the Model Armor template for sanitizing user prompts. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the user prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#user_prompt_template DiscoveryEngineAssistant#user_prompt_template}

---

###### `failure_mode`<sup>Optional</sup> <a name="failure_mode" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig.parameter.failureMode"></a>

- *Type:* str

Defines the failure mode for Model Armor sanitization. The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#failure_mode DiscoveryEngineAssistant#failure_mode}

---

##### `reset_banned_phrases` <a name="reset_banned_phrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resetBannedPhrases"></a>

```python
def reset_banned_phrases() -> None
```

##### `reset_model_armor_config` <a name="reset_model_armor_config" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resetModelArmorConfig"></a>

```python
def reset_model_armor_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrases">banned_phrases</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList">DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfig">model_armor_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference">DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrasesInput">banned_phrases_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfigInput">model_armor_config_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `banned_phrases`<sup>Required</sup> <a name="banned_phrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrases"></a>

```python
banned_phrases: DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList">DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList</a>

---

##### `model_armor_config`<sup>Required</sup> <a name="model_armor_config" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfig"></a>

```python
model_armor_config: DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference">DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference</a>

---

##### `banned_phrases_input`<sup>Optional</sup> <a name="banned_phrases_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrasesInput"></a>

```python
banned_phrases_input: IResolvable | typing.List[DiscoveryEngineAssistantCustomerPolicyBannedPhrases]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]

---

##### `model_armor_config_input`<sup>Optional</sup> <a name="model_armor_config_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfigInput"></a>

```python
model_armor_config_input: DiscoveryEngineAssistantCustomerPolicyModelArmorConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineAssistantCustomerPolicy
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a>

---


### DiscoveryEngineAssistantGenerationConfigOutputReference <a name="DiscoveryEngineAssistantGenerationConfigOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction">put_system_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resetDefaultLanguage">reset_default_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resetSystemInstruction">reset_system_instruction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_system_instruction` <a name="put_system_instruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction"></a>

```python
def put_system_instruction(
  additional_system_instruction: str = None
) -> None
```

###### `additional_system_instruction`<sup>Optional</sup> <a name="additional_system_instruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction.parameter.additionalSystemInstruction"></a>

- *Type:* str

Additional system instruction that will be added to the default system instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_assistant#additional_system_instruction DiscoveryEngineAssistant#additional_system_instruction}

---

##### `reset_default_language` <a name="reset_default_language" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resetDefaultLanguage"></a>

```python
def reset_default_language() -> None
```

##### `reset_system_instruction` <a name="reset_system_instruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resetSystemInstruction"></a>

```python
def reset_system_instruction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstruction">system_instruction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference">DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguageInput">default_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstructionInput">system_instruction_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguage">default_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `system_instruction`<sup>Required</sup> <a name="system_instruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstruction"></a>

```python
system_instruction: DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference">DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference</a>

---

##### `default_language_input`<sup>Optional</sup> <a name="default_language_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguageInput"></a>

```python
default_language_input: str
```

- *Type:* str

---

##### `system_instruction_input`<sup>Optional</sup> <a name="system_instruction_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstructionInput"></a>

```python
system_instruction_input: DiscoveryEngineAssistantGenerationConfigSystemInstruction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---

##### `default_language`<sup>Required</sup> <a name="default_language" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguage"></a>

```python
default_language: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineAssistantGenerationConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a>

---


### DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference <a name="DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resetAdditionalSystemInstruction">reset_additional_system_instruction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_system_instruction` <a name="reset_additional_system_instruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resetAdditionalSystemInstruction"></a>

```python
def reset_additional_system_instruction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstructionInput">additional_system_instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstruction">additional_system_instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_system_instruction_input`<sup>Optional</sup> <a name="additional_system_instruction_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstructionInput"></a>

```python
additional_system_instruction_input: str
```

- *Type:* str

---

##### `additional_system_instruction`<sup>Required</sup> <a name="additional_system_instruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstruction"></a>

```python
additional_system_instruction: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineAssistantGenerationConfigSystemInstruction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---


### DiscoveryEngineAssistantTimeoutsOutputReference <a name="DiscoveryEngineAssistantTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_assistant

discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineAssistantTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a>

---



