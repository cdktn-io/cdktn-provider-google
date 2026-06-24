# `dialogflowEnvironment` Submodule <a name="`dialogflowEnvironment` Submodule" id="@cdktn/provider-google.dialogflowEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowEnvironment <a name="DialogflowEnvironment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment google_dialogflow_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  environmentid: str,
  agent_version: str = None,
  deletion_policy: str = None,
  description: str = None,
  fulfillment: DialogflowEnvironmentFulfillment = None,
  id: str = None,
  location: str = None,
  project: str = None,
  text_to_speech_settings: DialogflowEnvironmentTextToSpeechSettings = None,
  timeouts: DialogflowEnvironmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.environmentid">environmentid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#environmentid DialogflowEnvironment#environmentid}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.agentVersion">agent_version</a></code> | <code>str</code> | The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.description">description</a></code> | <code>str</code> | The developer-provided description for this environment. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.fulfillment">fulfillment</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a></code> | fulfillment block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#id DialogflowEnvironment#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#location DialogflowEnvironment#location}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#project DialogflowEnvironment#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.textToSpeechSettings">text_to_speech_settings</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `environmentid`<sup>Required</sup> <a name="environmentid" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.environmentid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#environmentid DialogflowEnvironment#environmentid}.

---

##### `agent_version`<sup>Optional</sup> <a name="agent_version" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.agentVersion"></a>

- *Type:* str

The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#agent_version DialogflowEnvironment#agent_version}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#deletion_policy DialogflowEnvironment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.description"></a>

- *Type:* str

The developer-provided description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#description DialogflowEnvironment#description}

---

##### `fulfillment`<sup>Optional</sup> <a name="fulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.fulfillment"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a>

fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#fulfillment DialogflowEnvironment#fulfillment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#id DialogflowEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#location DialogflowEnvironment#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#project DialogflowEnvironment#project}.

---

##### `text_to_speech_settings`<sup>Optional</sup> <a name="text_to_speech_settings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.textToSpeechSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#text_to_speech_settings DialogflowEnvironment#text_to_speech_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#timeouts DialogflowEnvironment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putFulfillment">put_fulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTextToSpeechSettings">put_text_to_speech_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetAgentVersion">reset_agent_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetFulfillment">reset_fulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetTextToSpeechSettings">reset_text_to_speech_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_fulfillment` <a name="put_fulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putFulfillment"></a>

```python
def put_fulfillment(
  display_name: str = None,
  features: IResolvable | typing.List[DialogflowEnvironmentFulfillmentFeatures] = None,
  generic_web_service: DialogflowEnvironmentFulfillmentGenericWebService = None,
  name: str = None
) -> None
```

###### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putFulfillment.parameter.displayName"></a>

- *Type:* str

The human-readable name of the fulfillment, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#display_name DialogflowEnvironment#display_name}

---

###### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putFulfillment.parameter.features"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#features DialogflowEnvironment#features}

---

###### `generic_web_service`<sup>Optional</sup> <a name="generic_web_service" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putFulfillment.parameter.genericWebService"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#generic_web_service DialogflowEnvironment#generic_web_service}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putFulfillment.parameter.name"></a>

- *Type:* str

The unique identifier of the fulfillment. Supports the following formats: - projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#name DialogflowEnvironment#name}

---

##### `put_text_to_speech_settings` <a name="put_text_to_speech_settings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTextToSpeechSettings"></a>

```python
def put_text_to_speech_settings(
  enable_text_to_speech: bool | IResolvable = None,
  output_audio_encoding: str = None,
  sample_rate_hertz: typing.Union[int, float] = None,
  synthesize_speech_configs: IResolvable | typing.List[DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs] = None
) -> None
```

###### `enable_text_to_speech`<sup>Optional</sup> <a name="enable_text_to_speech" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTextToSpeechSettings.parameter.enableTextToSpeech"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether text to speech is enabled.

Even when this field is false, other settings in this proto are still retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#enable_text_to_speech DialogflowEnvironment#enable_text_to_speech}

---

###### `output_audio_encoding`<sup>Optional</sup> <a name="output_audio_encoding" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTextToSpeechSettings.parameter.outputAudioEncoding"></a>

- *Type:* str

Audio encoding of the synthesized audio content. Possible values: ["OUTPUT_AUDIO_ENCODING_UNSPECIFIED", "OUTPUT_AUDIO_ENCODING_LINEAR_16", "OUTPUT_AUDIO_ENCODING_MP3", "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS", "OUTPUT_AUDIO_ENCODING_OGG_OPUS", "OUTPUT_AUDIO_ENCODING_MULAW", "OUTPUT_AUDIO_ENCODING_ALAW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#output_audio_encoding DialogflowEnvironment#output_audio_encoding}

---

###### `sample_rate_hertz`<sup>Optional</sup> <a name="sample_rate_hertz" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTextToSpeechSettings.parameter.sampleRateHertz"></a>

- *Type:* typing.Union[int, float]

The synthesis sample rate (in hertz) for this audio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#sample_rate_hertz DialogflowEnvironment#sample_rate_hertz}

---

###### `synthesize_speech_configs`<sup>Optional</sup> <a name="synthesize_speech_configs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTextToSpeechSettings.parameter.synthesizeSpeechConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>]

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#synthesize_speech_configs DialogflowEnvironment#synthesize_speech_configs}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#create DialogflowEnvironment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#delete DialogflowEnvironment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#update DialogflowEnvironment#update}.

---

##### `reset_agent_version` <a name="reset_agent_version" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetAgentVersion"></a>

```python
def reset_agent_version() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_fulfillment` <a name="reset_fulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetFulfillment"></a>

```python
def reset_fulfillment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_text_to_speech_settings` <a name="reset_text_to_speech_settings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetTextToSpeechSettings"></a>

```python
def reset_text_to_speech_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DialogflowEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isConstruct"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformElement"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformResource"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DialogflowEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DialogflowEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DialogflowEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fulfillment">fulfillment</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference">DialogflowEnvironmentFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.textToSpeechSettings">text_to_speech_settings</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference">DialogflowEnvironmentTextToSpeechSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference">DialogflowEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.agentVersionInput">agent_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.environmentidInput">environmentid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fulfillmentInput">fulfillment_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.textToSpeechSettingsInput">text_to_speech_settings_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.agentVersion">agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.environmentid">environmentid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fulfillment`<sup>Required</sup> <a name="fulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fulfillment"></a>

```python
fulfillment: DialogflowEnvironmentFulfillmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference">DialogflowEnvironmentFulfillmentOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `text_to_speech_settings`<sup>Required</sup> <a name="text_to_speech_settings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.textToSpeechSettings"></a>

```python
text_to_speech_settings: DialogflowEnvironmentTextToSpeechSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference">DialogflowEnvironmentTextToSpeechSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.timeouts"></a>

```python
timeouts: DialogflowEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference">DialogflowEnvironmentTimeoutsOutputReference</a>

---

##### `agent_version_input`<sup>Optional</sup> <a name="agent_version_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.agentVersionInput"></a>

```python
agent_version_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environmentid_input`<sup>Optional</sup> <a name="environmentid_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.environmentidInput"></a>

```python
environmentid_input: str
```

- *Type:* str

---

##### `fulfillment_input`<sup>Optional</sup> <a name="fulfillment_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fulfillmentInput"></a>

```python
fulfillment_input: DialogflowEnvironmentFulfillment
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `text_to_speech_settings_input`<sup>Optional</sup> <a name="text_to_speech_settings_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.textToSpeechSettingsInput"></a>

```python
text_to_speech_settings_input: DialogflowEnvironmentTextToSpeechSettings
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DialogflowEnvironmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a>

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environmentid`<sup>Required</sup> <a name="environmentid" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.environmentid"></a>

```python
environmentid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowEnvironmentConfig <a name="DialogflowEnvironmentConfig" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  environmentid: str,
  agent_version: str = None,
  deletion_policy: str = None,
  description: str = None,
  fulfillment: DialogflowEnvironmentFulfillment = None,
  id: str = None,
  location: str = None,
  project: str = None,
  text_to_speech_settings: DialogflowEnvironmentTextToSpeechSettings = None,
  timeouts: DialogflowEnvironmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.environmentid">environmentid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#environmentid DialogflowEnvironment#environmentid}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.agentVersion">agent_version</a></code> | <code>str</code> | The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.description">description</a></code> | <code>str</code> | The developer-provided description for this environment. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.fulfillment">fulfillment</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a></code> | fulfillment block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#id DialogflowEnvironment#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#location DialogflowEnvironment#location}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#project DialogflowEnvironment#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.textToSpeechSettings">text_to_speech_settings</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `environmentid`<sup>Required</sup> <a name="environmentid" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.environmentid"></a>

```python
environmentid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#environmentid DialogflowEnvironment#environmentid}.

---

##### `agent_version`<sup>Optional</sup> <a name="agent_version" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#agent_version DialogflowEnvironment#agent_version}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#deletion_policy DialogflowEnvironment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The developer-provided description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#description DialogflowEnvironment#description}

---

##### `fulfillment`<sup>Optional</sup> <a name="fulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.fulfillment"></a>

```python
fulfillment: DialogflowEnvironmentFulfillment
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a>

fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#fulfillment DialogflowEnvironment#fulfillment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#id DialogflowEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#location DialogflowEnvironment#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#project DialogflowEnvironment#project}.

---

##### `text_to_speech_settings`<sup>Optional</sup> <a name="text_to_speech_settings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.textToSpeechSettings"></a>

```python
text_to_speech_settings: DialogflowEnvironmentTextToSpeechSettings
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#text_to_speech_settings DialogflowEnvironment#text_to_speech_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.timeouts"></a>

```python
timeouts: DialogflowEnvironmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#timeouts DialogflowEnvironment#timeouts}

---

### DialogflowEnvironmentFulfillment <a name="DialogflowEnvironmentFulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentFulfillment(
  display_name: str = None,
  features: IResolvable | typing.List[DialogflowEnvironmentFulfillmentFeatures] = None,
  generic_web_service: DialogflowEnvironmentFulfillmentGenericWebService = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the fulfillment, unique within the agent. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.features">features</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>]</code> | features block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.genericWebService">generic_web_service</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.name">name</a></code> | <code>str</code> | The unique identifier of the fulfillment. Supports the following formats: - projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the fulfillment, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#display_name DialogflowEnvironment#display_name}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.features"></a>

```python
features: IResolvable | typing.List[DialogflowEnvironmentFulfillmentFeatures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#features DialogflowEnvironment#features}

---

##### `generic_web_service`<sup>Optional</sup> <a name="generic_web_service" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.genericWebService"></a>

```python
generic_web_service: DialogflowEnvironmentFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#generic_web_service DialogflowEnvironment#generic_web_service}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.name"></a>

```python
name: str
```

- *Type:* str

The unique identifier of the fulfillment. Supports the following formats: - projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#name DialogflowEnvironment#name}

---

### DialogflowEnvironmentFulfillmentFeatures <a name="DialogflowEnvironmentFulfillmentFeatures" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures.property.type">type</a></code> | <code>str</code> | The type of the feature that enabled for fulfillment. Possible values: ["TYPE_UNSPECIFIED", "SMALLTALK"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the feature that enabled for fulfillment. Possible values: ["TYPE_UNSPECIFIED", "SMALLTALK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#type DialogflowEnvironment#type}

---

### DialogflowEnvironmentFulfillmentGenericWebService <a name="DialogflowEnvironmentFulfillmentGenericWebService" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService(
  uri: str,
  password: str = None,
  request_headers: typing.Mapping[str] = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.uri">uri</a></code> | <code>str</code> | The fulfillment URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.password">password</a></code> | <code>str</code> | The password for HTTP Basic authentication. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.requestHeaders">request_headers</a></code> | <code>typing.Mapping[str]</code> | The HTTP request headers to send together with fulfillment requests. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.username">username</a></code> | <code>str</code> | The user name for HTTP Basic authentication. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.uri"></a>

```python
uri: str
```

- *Type:* str

The fulfillment URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#uri DialogflowEnvironment#uri}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.password"></a>

```python
password: str
```

- *Type:* str

The password for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#password DialogflowEnvironment#password}

---

##### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.requestHeaders"></a>

```python
request_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The HTTP request headers to send together with fulfillment requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#request_headers DialogflowEnvironment#request_headers}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.username"></a>

```python
username: str
```

- *Type:* str

The user name for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#username DialogflowEnvironment#username}

---

### DialogflowEnvironmentTextToSpeechSettings <a name="DialogflowEnvironmentTextToSpeechSettings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings(
  enable_text_to_speech: bool | IResolvable = None,
  output_audio_encoding: str = None,
  sample_rate_hertz: typing.Union[int, float] = None,
  synthesize_speech_configs: IResolvable | typing.List[DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.enableTextToSpeech">enable_text_to_speech</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether text to speech is enabled. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.outputAudioEncoding">output_audio_encoding</a></code> | <code>str</code> | Audio encoding of the synthesized audio content. Possible values: ["OUTPUT_AUDIO_ENCODING_UNSPECIFIED", "OUTPUT_AUDIO_ENCODING_LINEAR_16", "OUTPUT_AUDIO_ENCODING_MP3", "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS", "OUTPUT_AUDIO_ENCODING_OGG_OPUS", "OUTPUT_AUDIO_ENCODING_MULAW", "OUTPUT_AUDIO_ENCODING_ALAW"]. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.sampleRateHertz">sample_rate_hertz</a></code> | <code>typing.Union[int, float]</code> | The synthesis sample rate (in hertz) for this audio. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.synthesizeSpeechConfigs">synthesize_speech_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>]</code> | synthesize_speech_configs block. |

---

##### `enable_text_to_speech`<sup>Optional</sup> <a name="enable_text_to_speech" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.enableTextToSpeech"></a>

```python
enable_text_to_speech: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether text to speech is enabled.

Even when this field is false, other settings in this proto are still retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#enable_text_to_speech DialogflowEnvironment#enable_text_to_speech}

---

##### `output_audio_encoding`<sup>Optional</sup> <a name="output_audio_encoding" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.outputAudioEncoding"></a>

```python
output_audio_encoding: str
```

- *Type:* str

Audio encoding of the synthesized audio content. Possible values: ["OUTPUT_AUDIO_ENCODING_UNSPECIFIED", "OUTPUT_AUDIO_ENCODING_LINEAR_16", "OUTPUT_AUDIO_ENCODING_MP3", "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS", "OUTPUT_AUDIO_ENCODING_OGG_OPUS", "OUTPUT_AUDIO_ENCODING_MULAW", "OUTPUT_AUDIO_ENCODING_ALAW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#output_audio_encoding DialogflowEnvironment#output_audio_encoding}

---

##### `sample_rate_hertz`<sup>Optional</sup> <a name="sample_rate_hertz" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.sampleRateHertz"></a>

```python
sample_rate_hertz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The synthesis sample rate (in hertz) for this audio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#sample_rate_hertz DialogflowEnvironment#sample_rate_hertz}

---

##### `synthesize_speech_configs`<sup>Optional</sup> <a name="synthesize_speech_configs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.synthesizeSpeechConfigs"></a>

```python
synthesize_speech_configs: IResolvable | typing.List[DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>]

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#synthesize_speech_configs DialogflowEnvironment#synthesize_speech_configs}

---

### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs(
  language: str,
  effects_profile_id: typing.List[str] = None,
  pitch: typing.Union[int, float] = None,
  speaking_rate: typing.Union[int, float] = None,
  voice: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice = None,
  volume_gain_db: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.language">language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#language DialogflowEnvironment#language}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.effectsProfileId">effects_profile_id</a></code> | <code>typing.List[str]</code> | An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.pitch">pitch</a></code> | <code>typing.Union[int, float]</code> | Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.speakingRate">speaking_rate</a></code> | <code>typing.Union[int, float]</code> | Speaking rate/speed, in the range [0.25, 4.0]. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.voice">voice</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | voice block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.volumeGainDb">volume_gain_db</a></code> | <code>typing.Union[int, float]</code> | Volume gain (in dB) of the normal native volume supported by the specific voice. |

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.language"></a>

```python
language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#language DialogflowEnvironment#language}.

---

##### `effects_profile_id`<sup>Optional</sup> <a name="effects_profile_id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.effectsProfileId"></a>

```python
effects_profile_id: typing.List[str]
```

- *Type:* typing.List[str]

An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech.

Effects are applied on top of each other in the order they are given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#effects_profile_id DialogflowEnvironment#effects_profile_id}

---

##### `pitch`<sup>Optional</sup> <a name="pitch" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.pitch"></a>

```python
pitch: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#pitch DialogflowEnvironment#pitch}

---

##### `speaking_rate`<sup>Optional</sup> <a name="speaking_rate" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.speakingRate"></a>

```python
speaking_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Speaking rate/speed, in the range [0.25, 4.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#speaking_rate DialogflowEnvironment#speaking_rate}

---

##### `voice`<sup>Optional</sup> <a name="voice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.voice"></a>

```python
voice: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

voice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#voice DialogflowEnvironment#voice}

---

##### `volume_gain_db`<sup>Optional</sup> <a name="volume_gain_db" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.volumeGainDb"></a>

```python
volume_gain_db: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Volume gain (in dB) of the normal native volume supported by the specific voice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#volume_gain_db DialogflowEnvironment#volume_gain_db}

---

### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice(
  name: str = None,
  ssml_gender: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.name">name</a></code> | <code>str</code> | The name of the voice. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.ssmlGender">ssml_gender</a></code> | <code>str</code> | The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"]. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the voice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#name DialogflowEnvironment#name}

---

##### `ssml_gender`<sup>Optional</sup> <a name="ssml_gender" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.ssmlGender"></a>

```python
ssml_gender: str
```

- *Type:* str

The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#ssml_gender DialogflowEnvironment#ssml_gender}

---

### DialogflowEnvironmentTimeouts <a name="DialogflowEnvironmentTimeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#create DialogflowEnvironment#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#delete DialogflowEnvironment#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#update DialogflowEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#create DialogflowEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#delete DialogflowEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#update DialogflowEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowEnvironmentFulfillmentFeaturesList <a name="DialogflowEnvironmentFulfillmentFeaturesList" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowEnvironmentFulfillmentFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DialogflowEnvironmentFulfillmentFeatures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>]

---


### DialogflowEnvironmentFulfillmentFeaturesOutputReference <a name="DialogflowEnvironmentFulfillmentFeaturesOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowEnvironmentFulfillmentFeatures
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>

---


### DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference <a name="DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetRequestHeaders">reset_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_request_headers` <a name="reset_request_headers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetRequestHeaders"></a>

```python
def reset_request_headers() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput">request_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeaders">request_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `request_headers_input`<sup>Optional</sup> <a name="request_headers_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```python
request_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `request_headers`<sup>Required</sup> <a name="request_headers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeaders"></a>

```python
request_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowEnvironmentFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a>

---


### DialogflowEnvironmentFulfillmentOutputReference <a name="DialogflowEnvironmentFulfillmentOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putFeatures">put_features</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putGenericWebService">put_generic_web_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetFeatures">reset_features</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetGenericWebService">reset_generic_web_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_features` <a name="put_features" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putFeatures"></a>

```python
def put_features(
  value: IResolvable | typing.List[DialogflowEnvironmentFulfillmentFeatures]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putFeatures.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>]

---

##### `put_generic_web_service` <a name="put_generic_web_service" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putGenericWebService"></a>

```python
def put_generic_web_service(
  uri: str,
  password: str = None,
  request_headers: typing.Mapping[str] = None,
  username: str = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putGenericWebService.parameter.uri"></a>

- *Type:* str

The fulfillment URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#uri DialogflowEnvironment#uri}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putGenericWebService.parameter.password"></a>

- *Type:* str

The password for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#password DialogflowEnvironment#password}

---

###### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putGenericWebService.parameter.requestHeaders"></a>

- *Type:* typing.Mapping[str]

The HTTP request headers to send together with fulfillment requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#request_headers DialogflowEnvironment#request_headers}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putGenericWebService.parameter.username"></a>

- *Type:* str

The user name for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#username DialogflowEnvironment#username}

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_features` <a name="reset_features" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetFeatures"></a>

```python
def reset_features() -> None
```

##### `reset_generic_web_service` <a name="reset_generic_web_service" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetGenericWebService"></a>

```python
def reset_generic_web_service() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.features">features</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList">DialogflowEnvironmentFulfillmentFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.genericWebService">generic_web_service</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference">DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.featuresInput">features_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.genericWebServiceInput">generic_web_service_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.features"></a>

```python
features: DialogflowEnvironmentFulfillmentFeaturesList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList">DialogflowEnvironmentFulfillmentFeaturesList</a>

---

##### `generic_web_service`<sup>Required</sup> <a name="generic_web_service" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.genericWebService"></a>

```python
generic_web_service: DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference">DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `features_input`<sup>Optional</sup> <a name="features_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.featuresInput"></a>

```python
features_input: IResolvable | typing.List[DialogflowEnvironmentFulfillmentFeatures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>]

---

##### `generic_web_service_input`<sup>Optional</sup> <a name="generic_web_service_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.genericWebServiceInput"></a>

```python
generic_web_service_input: DialogflowEnvironmentFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowEnvironmentFulfillment
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a>

---


### DialogflowEnvironmentTextToSpeechSettingsOutputReference <a name="DialogflowEnvironmentTextToSpeechSettingsOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs">put_synthesize_speech_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetEnableTextToSpeech">reset_enable_text_to_speech</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetOutputAudioEncoding">reset_output_audio_encoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSampleRateHertz">reset_sample_rate_hertz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs">reset_synthesize_speech_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_synthesize_speech_configs` <a name="put_synthesize_speech_configs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs"></a>

```python
def put_synthesize_speech_configs(
  value: IResolvable | typing.List[DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>]

---

##### `reset_enable_text_to_speech` <a name="reset_enable_text_to_speech" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetEnableTextToSpeech"></a>

```python
def reset_enable_text_to_speech() -> None
```

##### `reset_output_audio_encoding` <a name="reset_output_audio_encoding" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetOutputAudioEncoding"></a>

```python
def reset_output_audio_encoding() -> None
```

##### `reset_sample_rate_hertz` <a name="reset_sample_rate_hertz" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSampleRateHertz"></a>

```python
def reset_sample_rate_hertz() -> None
```

##### `reset_synthesize_speech_configs` <a name="reset_synthesize_speech_configs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs"></a>

```python
def reset_synthesize_speech_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs">synthesize_speech_configs</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeechInput">enable_text_to_speech_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncodingInput">output_audio_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertzInput">sample_rate_hertz_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput">synthesize_speech_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeech">enable_text_to_speech</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncoding">output_audio_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertz">sample_rate_hertz</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `synthesize_speech_configs`<sup>Required</sup> <a name="synthesize_speech_configs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs"></a>

```python
synthesize_speech_configs: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList</a>

---

##### `enable_text_to_speech_input`<sup>Optional</sup> <a name="enable_text_to_speech_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeechInput"></a>

```python
enable_text_to_speech_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `output_audio_encoding_input`<sup>Optional</sup> <a name="output_audio_encoding_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncodingInput"></a>

```python
output_audio_encoding_input: str
```

- *Type:* str

---

##### `sample_rate_hertz_input`<sup>Optional</sup> <a name="sample_rate_hertz_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertzInput"></a>

```python
sample_rate_hertz_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `synthesize_speech_configs_input`<sup>Optional</sup> <a name="synthesize_speech_configs_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput"></a>

```python
synthesize_speech_configs_input: IResolvable | typing.List[DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>]

---

##### `enable_text_to_speech`<sup>Required</sup> <a name="enable_text_to_speech" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeech"></a>

```python
enable_text_to_speech: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `output_audio_encoding`<sup>Required</sup> <a name="output_audio_encoding" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncoding"></a>

```python
output_audio_encoding: str
```

- *Type:* str

---

##### `sample_rate_hertz`<sup>Required</sup> <a name="sample_rate_hertz" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertz"></a>

```python
sample_rate_hertz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowEnvironmentTextToSpeechSettings
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a>

---


### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>]

---


### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice">put_voice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetEffectsProfileId">reset_effects_profile_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetPitch">reset_pitch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetSpeakingRate">reset_speaking_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVoice">reset_voice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVolumeGainDb">reset_volume_gain_db</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_voice` <a name="put_voice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice"></a>

```python
def put_voice(
  name: str = None,
  ssml_gender: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice.parameter.name"></a>

- *Type:* str

The name of the voice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#name DialogflowEnvironment#name}

---

###### `ssml_gender`<sup>Optional</sup> <a name="ssml_gender" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice.parameter.ssmlGender"></a>

- *Type:* str

The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/dialogflow_environment#ssml_gender DialogflowEnvironment#ssml_gender}

---

##### `reset_effects_profile_id` <a name="reset_effects_profile_id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetEffectsProfileId"></a>

```python
def reset_effects_profile_id() -> None
```

##### `reset_pitch` <a name="reset_pitch" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetPitch"></a>

```python
def reset_pitch() -> None
```

##### `reset_speaking_rate` <a name="reset_speaking_rate" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetSpeakingRate"></a>

```python
def reset_speaking_rate() -> None
```

##### `reset_voice` <a name="reset_voice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVoice"></a>

```python
def reset_voice() -> None
```

##### `reset_volume_gain_db` <a name="reset_volume_gain_db" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVolumeGainDb"></a>

```python
def reset_volume_gain_db() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voice">voice</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileIdInput">effects_profile_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitchInput">pitch_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRateInput">speaking_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voiceInput">voice_input</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDbInput">volume_gain_db_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileId">effects_profile_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitch">pitch</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRate">speaking_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDb">volume_gain_db</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `voice`<sup>Required</sup> <a name="voice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voice"></a>

```python
voice: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference</a>

---

##### `effects_profile_id_input`<sup>Optional</sup> <a name="effects_profile_id_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileIdInput"></a>

```python
effects_profile_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `pitch_input`<sup>Optional</sup> <a name="pitch_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitchInput"></a>

```python
pitch_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `speaking_rate_input`<sup>Optional</sup> <a name="speaking_rate_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRateInput"></a>

```python
speaking_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `voice_input`<sup>Optional</sup> <a name="voice_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voiceInput"></a>

```python
voice_input: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---

##### `volume_gain_db_input`<sup>Optional</sup> <a name="volume_gain_db_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDbInput"></a>

```python
volume_gain_db_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `effects_profile_id`<sup>Required</sup> <a name="effects_profile_id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileId"></a>

```python
effects_profile_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `pitch`<sup>Required</sup> <a name="pitch" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitch"></a>

```python
pitch: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `speaking_rate`<sup>Required</sup> <a name="speaking_rate" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRate"></a>

```python
speaking_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_gain_db`<sup>Required</sup> <a name="volume_gain_db" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDb"></a>

```python
volume_gain_db: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>

---


### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetSsmlGender">reset_ssml_gender</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_ssml_gender` <a name="reset_ssml_gender" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetSsmlGender"></a>

```python
def reset_ssml_gender() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGenderInput">ssml_gender_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGender">ssml_gender</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ssml_gender_input`<sup>Optional</sup> <a name="ssml_gender_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGenderInput"></a>

```python
ssml_gender_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ssml_gender`<sup>Required</sup> <a name="ssml_gender" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGender"></a>

```python
ssml_gender: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---


### DialogflowEnvironmentTimeoutsOutputReference <a name="DialogflowEnvironmentTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dialogflow_environment

dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowEnvironmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a>

---



