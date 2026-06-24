# `cesExample` Submodule <a name="`cesExample` Submodule" id="@cdktn/provider-google.cesExample"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesExample <a name="CesExample" id="@cdktn/provider-google.cesExample.CesExample"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example google_ces_example}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExample.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExample(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  display_name: str,
  example_id: str,
  location: str,
  deletion_policy: str = None,
  description: str = None,
  entry_agent: str = None,
  id: str = None,
  messages: IResolvable | typing.List[CesExampleMessages] = None,
  project: str = None,
  timeouts: CesExampleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name', defining the app the example belongs to. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the example. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.exampleId">example_id</a></code> | <code>str</code> | The ID to use for the example, which will become the final component of the example's resource name. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name', defining what region the parent app is in. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-readable description of the example. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.entryAgent">entry_agent</a></code> | <code>str</code> | The agent that initially handles the conversation. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#id CesExample#id}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.messages">messages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>]</code> | messages block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#project CesExample#project}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.app"></a>

- *Type:* str

Resource ID segment making up resource 'name', defining the app the example belongs to.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#app CesExample#app}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#display_name CesExample#display_name}

---

##### `example_id`<sup>Required</sup> <a name="example_id" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.exampleId"></a>

- *Type:* str

The ID to use for the example, which will become the final component of the example's resource name.

In Terraform, this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#example_id CesExample#example_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name', defining what region the parent app is in.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#location CesExample#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#deletion_policy CesExample#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.description"></a>

- *Type:* str

Human-readable description of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#description CesExample#description}

---

##### `entry_agent`<sup>Optional</sup> <a name="entry_agent" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.entryAgent"></a>

- *Type:* str

The agent that initially handles the conversation.

If not specified, the
example represents a conversation that is handled by the root agent.
Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#entry_agent CesExample#entry_agent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#id CesExample#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.messages"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#messages CesExample#messages}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#project CesExample#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#timeouts CesExample#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.putMessages">put_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetEntryAgent">reset_entry_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetMessages">reset_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesExample.CesExample.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesExample.CesExample.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesExample.CesExample.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.cesExample.CesExample.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesExample.CesExample.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExample.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.cesExample.CesExample.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.cesExample.CesExample.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.cesExample.CesExample.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.cesExample.CesExample.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.cesExample.CesExample.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.cesExample.CesExample.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.cesExample.CesExample.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cesExample.CesExample.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesExample.CesExample.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExample.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesExample.CesExample.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExample.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesExample.CesExample.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExample.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesExample.CesExample.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExample.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.cesExample.CesExample.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.cesExample.CesExample.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesExample.CesExample.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesExample.CesExample.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExample.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.cesExample.CesExample.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.cesExample.CesExample.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cesExample.CesExample.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesExample.CesExample.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.cesExample.CesExample.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_messages` <a name="put_messages" id="@cdktn/provider-google.cesExample.CesExample.putMessages"></a>

```python
def put_messages(
  value: IResolvable | typing.List[CesExampleMessages]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExample.putMessages.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.cesExample.CesExample.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesExample.CesExample.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#create CesExample#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesExample.CesExample.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#delete CesExample#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesExample.CesExample.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#update CesExample#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.cesExample.CesExample.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesExample.CesExample.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_entry_agent` <a name="reset_entry_agent" id="@cdktn/provider-google.cesExample.CesExample.resetEntryAgent"></a>

```python
def reset_entry_agent() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.cesExample.CesExample.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_messages` <a name="reset_messages" id="@cdktn/provider-google.cesExample.CesExample.resetMessages"></a>

```python
def reset_messages() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.cesExample.CesExample.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.cesExample.CesExample.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CesExample resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.cesExample.CesExample.isConstruct"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExample.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesExample.CesExample.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.cesExample.CesExample.isTerraformElement"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExample.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesExample.CesExample.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.cesExample.CesExample.isTerraformResource"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExample.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesExample.CesExample.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExample.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CesExample resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CesExample to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CesExample that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CesExample to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.invalid">invalid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.messages">messages</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList">CesExampleMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference">CesExampleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.entryAgentInput">entry_agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.exampleIdInput">example_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.messagesInput">messages_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.entryAgent">entry_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.exampleId">example_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesExample.CesExample.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.cesExample.CesExample.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExample.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.cesExample.CesExample.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.cesExample.CesExample.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.cesExample.CesExample.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.cesExample.CesExample.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesExample.CesExample.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesExample.CesExample.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesExample.CesExample.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesExample.CesExample.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesExample.CesExample.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesExample.CesExample.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesExample.CesExample.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.cesExample.CesExample.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesExample.CesExample.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `invalid`<sup>Required</sup> <a name="invalid" id="@cdktn/provider-google.cesExample.CesExample.property.invalid"></a>

```python
invalid: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-google.cesExample.CesExample.property.messages"></a>

```python
messages: CesExampleMessagesList
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList">CesExampleMessagesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesExample.CesExample.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesExample.CesExample.property.timeouts"></a>

```python
timeouts: CesExampleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference">CesExampleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.cesExample.CesExample.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-google.cesExample.CesExample.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.cesExample.CesExample.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesExample.CesExample.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.cesExample.CesExample.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `entry_agent_input`<sup>Optional</sup> <a name="entry_agent_input" id="@cdktn/provider-google.cesExample.CesExample.property.entryAgentInput"></a>

```python
entry_agent_input: str
```

- *Type:* str

---

##### `example_id_input`<sup>Optional</sup> <a name="example_id_input" id="@cdktn/provider-google.cesExample.CesExample.property.exampleIdInput"></a>

```python
example_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.cesExample.CesExample.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.cesExample.CesExample.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `messages_input`<sup>Optional</sup> <a name="messages_input" id="@cdktn/provider-google.cesExample.CesExample.property.messagesInput"></a>

```python
messages_input: IResolvable | typing.List[CesExampleMessages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.cesExample.CesExample.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.cesExample.CesExample.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CesExampleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesExample.CesExample.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesExample.CesExample.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesExample.CesExample.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesExample.CesExample.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entry_agent`<sup>Required</sup> <a name="entry_agent" id="@cdktn/provider-google.cesExample.CesExample.property.entryAgent"></a>

```python
entry_agent: str
```

- *Type:* str

---

##### `example_id`<sup>Required</sup> <a name="example_id" id="@cdktn/provider-google.cesExample.CesExample.property.exampleId"></a>

```python
example_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesExample.CesExample.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesExample.CesExample.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesExample.CesExample.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CesExampleConfig <a name="CesExampleConfig" id="@cdktn/provider-google.cesExample.CesExampleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  display_name: str,
  example_id: str,
  location: str,
  deletion_policy: str = None,
  description: str = None,
  entry_agent: str = None,
  id: str = None,
  messages: IResolvable | typing.List[CesExampleMessages] = None,
  project: str = None,
  timeouts: CesExampleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name', defining the app the example belongs to. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the example. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.exampleId">example_id</a></code> | <code>str</code> | The ID to use for the example, which will become the final component of the example's resource name. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name', defining what region the parent app is in. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.description">description</a></code> | <code>str</code> | Human-readable description of the example. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.entryAgent">entry_agent</a></code> | <code>str</code> | The agent that initially handles the conversation. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#id CesExample#id}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.messages">messages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>]</code> | messages block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#project CesExample#project}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.app"></a>

```python
app: str
```

- *Type:* str

Resource ID segment making up resource 'name', defining the app the example belongs to.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#app CesExample#app}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#display_name CesExample#display_name}

---

##### `example_id`<sup>Required</sup> <a name="example_id" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.exampleId"></a>

```python
example_id: str
```

- *Type:* str

The ID to use for the example, which will become the final component of the example's resource name.

In Terraform, this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#example_id CesExample#example_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name', defining what region the parent app is in.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#location CesExample#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#deletion_policy CesExample#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#description CesExample#description}

---

##### `entry_agent`<sup>Optional</sup> <a name="entry_agent" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.entryAgent"></a>

```python
entry_agent: str
```

- *Type:* str

The agent that initially handles the conversation.

If not specified, the
example represents a conversation that is handled by the root agent.
Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#entry_agent CesExample#entry_agent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#id CesExample#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.messages"></a>

```python
messages: IResolvable | typing.List[CesExampleMessages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#messages CesExample#messages}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#project CesExample#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.timeouts"></a>

```python
timeouts: CesExampleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#timeouts CesExample#timeouts}

---

### CesExampleMessages <a name="CesExampleMessages" id="@cdktn/provider-google.cesExample.CesExampleMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessages.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessages(
  chunks: IResolvable | typing.List[CesExampleMessagesChunks] = None,
  role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessages.property.chunks">chunks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>]</code> | chunks block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessages.property.role">role</a></code> | <code>str</code> | The role within the conversation, e.g., user, agent. |

---

##### `chunks`<sup>Optional</sup> <a name="chunks" id="@cdktn/provider-google.cesExample.CesExampleMessages.property.chunks"></a>

```python
chunks: IResolvable | typing.List[CesExampleMessagesChunks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>]

chunks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#chunks CesExample#chunks}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-google.cesExample.CesExampleMessages.property.role"></a>

```python
role: str
```

- *Type:* str

The role within the conversation, e.g., user, agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#role CesExample#role}

---

### CesExampleMessagesChunks <a name="CesExampleMessagesChunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunks(
  agent_transfer: CesExampleMessagesChunksAgentTransfer = None,
  image: CesExampleMessagesChunksImage = None,
  text: str = None,
  tool_call: CesExampleMessagesChunksToolCall = None,
  tool_response: CesExampleMessagesChunksToolResponse = None,
  updated_variables: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.agentTransfer">agent_transfer</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.image">image</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a></code> | image block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.text">text</a></code> | <code>str</code> | Text data. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolCall">tool_call</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a></code> | tool_call block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolResponse">tool_response</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a></code> | tool_response block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.updatedVariables">updated_variables</a></code> | <code>str</code> | A struct represents variables that were updated in the conversation, keyed by variable names. |

---

##### `agent_transfer`<sup>Optional</sup> <a name="agent_transfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.agentTransfer"></a>

```python
agent_transfer: CesExampleMessagesChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#agent_transfer CesExample#agent_transfer}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.image"></a>

```python
image: CesExampleMessagesChunksImage
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#image CesExample#image}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.text"></a>

```python
text: str
```

- *Type:* str

Text data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#text CesExample#text}

---

##### `tool_call`<sup>Optional</sup> <a name="tool_call" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolCall"></a>

```python
tool_call: CesExampleMessagesChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

tool_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#tool_call CesExample#tool_call}

---

##### `tool_response`<sup>Optional</sup> <a name="tool_response" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolResponse"></a>

```python
tool_response: CesExampleMessagesChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#tool_response CesExample#tool_response}

---

##### `updated_variables`<sup>Optional</sup> <a name="updated_variables" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.updatedVariables"></a>

```python
updated_variables: str
```

- *Type:* str

A struct represents variables that were updated in the conversation, keyed by variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#updated_variables CesExample#updated_variables}

---

### CesExampleMessagesChunksAgentTransfer <a name="CesExampleMessagesChunksAgentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunksAgentTransfer(
  target_agent: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer.property.targetAgent">target_agent</a></code> | <code>str</code> | The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |

---

##### `target_agent`<sup>Required</sup> <a name="target_agent" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer.property.targetAgent"></a>

```python
target_agent: str
```

- *Type:* str

The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#target_agent CesExample#target_agent}

---

### CesExampleMessagesChunksImage <a name="CesExampleMessagesChunksImage" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunksImage(
  data: str,
  mime_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.data">data</a></code> | <code>str</code> | Raw bytes of the image. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.mimeType">mime_type</a></code> | <code>str</code> | The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.data"></a>

```python
data: str
```

- *Type:* str

Raw bytes of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#data CesExample#data}

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#mime_type CesExample#mime_type}

---

### CesExampleMessagesChunksToolCall <a name="CesExampleMessagesChunksToolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunksToolCall(
  args: str = None,
  id: str = None,
  tool: str = None,
  toolset_tool: CesExampleMessagesChunksToolCallToolsetTool = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.args">args</a></code> | <code>str</code> | The input parameters and values for the tool in JSON object format. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.id">id</a></code> | <code>str</code> | The unique identifier of the tool call. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.tool">tool</a></code> | <code>str</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.toolsetTool">toolset_tool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a></code> | toolset_tool block. |

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.args"></a>

```python
args: str
```

- *Type:* str

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#args CesExample#args}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.id"></a>

```python
id: str
```

- *Type:* str

The unique identifier of the tool call.

If populated, the client should
return the execution result with the matching ID in
ToolResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#id CesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.tool"></a>

```python
tool: str
```

- *Type:* str

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#tool CesExample#tool}

---

##### `toolset_tool`<sup>Optional</sup> <a name="toolset_tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.toolsetTool"></a>

```python
toolset_tool: CesExampleMessagesChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#toolset_tool CesExample#toolset_tool}

---

### CesExampleMessagesChunksToolCallToolsetTool <a name="CesExampleMessagesChunksToolCallToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunksToolCallToolsetTool(
  toolset: str,
  tool_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolset">toolset</a></code> | <code>str</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolId">tool_id</a></code> | <code>str</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#toolset CesExample#toolset}

---

##### `tool_id`<sup>Optional</sup> <a name="tool_id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#tool_id CesExample#tool_id}

---

### CesExampleMessagesChunksToolResponse <a name="CesExampleMessagesChunksToolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunksToolResponse(
  response: str,
  id: str = None,
  tool: str = None,
  toolset_tool: CesExampleMessagesChunksToolResponseToolsetTool = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.response">response</a></code> | <code>str</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.id">id</a></code> | <code>str</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.tool">tool</a></code> | <code>str</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.toolsetTool">toolset_tool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.response"></a>

```python
response: str
```

- *Type:* str

The tool execution result in JSON object format.

Use "output" key to specify tool response and "error" key to specify
error details (if any). If "output" and "error" keys are not specified,
then whole "response" is treated as tool execution result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#response CesExample#response}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.id"></a>

```python
id: str
```

- *Type:* str

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#id CesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.tool"></a>

```python
tool: str
```

- *Type:* str

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#tool CesExample#tool}

---

##### `toolset_tool`<sup>Optional</sup> <a name="toolset_tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.toolsetTool"></a>

```python
toolset_tool: CesExampleMessagesChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#toolset_tool CesExample#toolset_tool}

---

### CesExampleMessagesChunksToolResponseToolsetTool <a name="CesExampleMessagesChunksToolResponseToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunksToolResponseToolsetTool(
  toolset: str,
  tool_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolset">toolset</a></code> | <code>str</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolId">tool_id</a></code> | <code>str</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#toolset CesExample#toolset}

---

##### `tool_id`<sup>Optional</sup> <a name="tool_id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#tool_id CesExample#tool_id}

---

### CesExampleTimeouts <a name="CesExampleTimeouts" id="@cdktn/provider-google.cesExample.CesExampleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#create CesExample#create}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#delete CesExample#delete}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#update CesExample#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#create CesExample#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#delete CesExample#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#update CesExample#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesExampleMessagesChunksAgentTransferOutputReference <a name="CesExampleMessagesChunksAgentTransferOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunksAgentTransferOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput">target_agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent">target_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `target_agent_input`<sup>Optional</sup> <a name="target_agent_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput"></a>

```python
target_agent_input: str
```

- *Type:* str

---

##### `target_agent`<sup>Required</sup> <a name="target_agent" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent"></a>

```python
target_agent: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.internalValue"></a>

```python
internal_value: CesExampleMessagesChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

---


### CesExampleMessagesChunksImageOutputReference <a name="CesExampleMessagesChunksImageOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunksImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeTypeInput">mime_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `mime_type_input`<sup>Optional</sup> <a name="mime_type_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeTypeInput"></a>

```python
mime_type_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.internalValue"></a>

```python
internal_value: CesExampleMessagesChunksImage
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

---


### CesExampleMessagesChunksList <a name="CesExampleMessagesChunksList" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesExampleMessagesChunksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesExampleMessagesChunks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>]

---


### CesExampleMessagesChunksOutputReference <a name="CesExampleMessagesChunksOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putAgentTransfer">put_agent_transfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putImage">put_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall">put_tool_call</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse">put_tool_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetAgentTransfer">reset_agent_transfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolCall">reset_tool_call</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolResponse">reset_tool_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetUpdatedVariables">reset_updated_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_agent_transfer` <a name="put_agent_transfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putAgentTransfer"></a>

```python
def put_agent_transfer(
  target_agent: str
) -> None
```

###### `target_agent`<sup>Required</sup> <a name="target_agent" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putAgentTransfer.parameter.targetAgent"></a>

- *Type:* str

The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#target_agent CesExample#target_agent}

---

##### `put_image` <a name="put_image" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putImage"></a>

```python
def put_image(
  data: str,
  mime_type: str
) -> None
```

###### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putImage.parameter.data"></a>

- *Type:* str

Raw bytes of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#data CesExample#data}

---

###### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putImage.parameter.mimeType"></a>

- *Type:* str

The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#mime_type CesExample#mime_type}

---

##### `put_tool_call` <a name="put_tool_call" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall"></a>

```python
def put_tool_call(
  args: str = None,
  id: str = None,
  tool: str = None,
  toolset_tool: CesExampleMessagesChunksToolCallToolsetTool = None
) -> None
```

###### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall.parameter.args"></a>

- *Type:* str

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#args CesExample#args}

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall.parameter.id"></a>

- *Type:* str

The unique identifier of the tool call.

If populated, the client should
return the execution result with the matching ID in
ToolResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#id CesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall.parameter.tool"></a>

- *Type:* str

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#tool CesExample#tool}

---

###### `toolset_tool`<sup>Optional</sup> <a name="toolset_tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall.parameter.toolsetTool"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#toolset_tool CesExample#toolset_tool}

---

##### `put_tool_response` <a name="put_tool_response" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse"></a>

```python
def put_tool_response(
  response: str,
  id: str = None,
  tool: str = None,
  toolset_tool: CesExampleMessagesChunksToolResponseToolsetTool = None
) -> None
```

###### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse.parameter.response"></a>

- *Type:* str

The tool execution result in JSON object format.

Use "output" key to specify tool response and "error" key to specify
error details (if any). If "output" and "error" keys are not specified,
then whole "response" is treated as tool execution result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#response CesExample#response}

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse.parameter.id"></a>

- *Type:* str

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#id CesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse.parameter.tool"></a>

- *Type:* str

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#tool CesExample#tool}

---

###### `toolset_tool`<sup>Optional</sup> <a name="toolset_tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse.parameter.toolsetTool"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#toolset_tool CesExample#toolset_tool}

---

##### `reset_agent_transfer` <a name="reset_agent_transfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetAgentTransfer"></a>

```python
def reset_agent_transfer() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_tool_call` <a name="reset_tool_call" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolCall"></a>

```python
def reset_tool_call() -> None
```

##### `reset_tool_response` <a name="reset_tool_response" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolResponse"></a>

```python
def reset_tool_response() -> None
```

##### `reset_updated_variables` <a name="reset_updated_variables" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetUpdatedVariables"></a>

```python
def reset_updated_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransfer">agent_transfer</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference">CesExampleMessagesChunksAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.image">image</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference">CesExampleMessagesChunksImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCall">tool_call</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference">CesExampleMessagesChunksToolCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponse">tool_response</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference">CesExampleMessagesChunksToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransferInput">agent_transfer_input</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.imageInput">image_input</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCallInput">tool_call_input</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponseInput">tool_response_input</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariablesInput">updated_variables_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariables">updated_variables</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_transfer`<sup>Required</sup> <a name="agent_transfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransfer"></a>

```python
agent_transfer: CesExampleMessagesChunksAgentTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference">CesExampleMessagesChunksAgentTransferOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.image"></a>

```python
image: CesExampleMessagesChunksImageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference">CesExampleMessagesChunksImageOutputReference</a>

---

##### `tool_call`<sup>Required</sup> <a name="tool_call" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCall"></a>

```python
tool_call: CesExampleMessagesChunksToolCallOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference">CesExampleMessagesChunksToolCallOutputReference</a>

---

##### `tool_response`<sup>Required</sup> <a name="tool_response" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponse"></a>

```python
tool_response: CesExampleMessagesChunksToolResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference">CesExampleMessagesChunksToolResponseOutputReference</a>

---

##### `agent_transfer_input`<sup>Optional</sup> <a name="agent_transfer_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransferInput"></a>

```python
agent_transfer_input: CesExampleMessagesChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.imageInput"></a>

```python
image_input: CesExampleMessagesChunksImage
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `tool_call_input`<sup>Optional</sup> <a name="tool_call_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCallInput"></a>

```python
tool_call_input: CesExampleMessagesChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

---

##### `tool_response_input`<sup>Optional</sup> <a name="tool_response_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponseInput"></a>

```python
tool_response_input: CesExampleMessagesChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

---

##### `updated_variables_input`<sup>Optional</sup> <a name="updated_variables_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariablesInput"></a>

```python
updated_variables_input: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `updated_variables`<sup>Required</sup> <a name="updated_variables" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariables"></a>

```python
updated_variables: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesExampleMessagesChunks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>

---


### CesExampleMessagesChunksToolCallOutputReference <a name="CesExampleMessagesChunksToolCallOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunksToolCallOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.putToolsetTool">put_toolset_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetTool">reset_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetToolsetTool">reset_toolset_tool</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_toolset_tool` <a name="put_toolset_tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.putToolsetTool"></a>

```python
def put_toolset_tool(
  toolset: str,
  tool_id: str = None
) -> None
```

###### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.putToolsetTool.parameter.toolset"></a>

- *Type:* str

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#toolset CesExample#toolset}

---

###### `tool_id`<sup>Optional</sup> <a name="tool_id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.putToolsetTool.parameter.toolId"></a>

- *Type:* str

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#tool_id CesExample#tool_id}

---

##### `reset_args` <a name="reset_args" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tool` <a name="reset_tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetTool"></a>

```python
def reset_tool() -> None
```

##### `reset_toolset_tool` <a name="reset_toolset_tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetToolsetTool"></a>

```python
def reset_toolset_tool() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetTool">toolset_tool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference">CesExampleMessagesChunksToolCallToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.argsInput">args_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolInput">tool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput">toolset_tool_input</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.args">args</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.tool">tool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `toolset_tool`<sup>Required</sup> <a name="toolset_tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetTool"></a>

```python
toolset_tool: CesExampleMessagesChunksToolCallToolsetToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference">CesExampleMessagesChunksToolCallToolsetToolOutputReference</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.argsInput"></a>

```python
args_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tool_input`<sup>Optional</sup> <a name="tool_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolInput"></a>

```python
tool_input: str
```

- *Type:* str

---

##### `toolset_tool_input`<sup>Optional</sup> <a name="toolset_tool_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput"></a>

```python
toolset_tool_input: CesExampleMessagesChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.args"></a>

```python
args: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.tool"></a>

```python
tool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.internalValue"></a>

```python
internal_value: CesExampleMessagesChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

---


### CesExampleMessagesChunksToolCallToolsetToolOutputReference <a name="CesExampleMessagesChunksToolCallToolsetToolOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId">reset_tool_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tool_id` <a name="reset_tool_id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId"></a>

```python
def reset_tool_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput">tool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput">toolset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId">tool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tool_id_input`<sup>Optional</sup> <a name="tool_id_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput"></a>

```python
tool_id_input: str
```

- *Type:* str

---

##### `toolset_input`<sup>Optional</sup> <a name="toolset_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput"></a>

```python
toolset_input: str
```

- *Type:* str

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue"></a>

```python
internal_value: CesExampleMessagesChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

---


### CesExampleMessagesChunksToolResponseOutputReference <a name="CesExampleMessagesChunksToolResponseOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunksToolResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.putToolsetTool">put_toolset_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetTool">reset_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool">reset_toolset_tool</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_toolset_tool` <a name="put_toolset_tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.putToolsetTool"></a>

```python
def put_toolset_tool(
  toolset: str,
  tool_id: str = None
) -> None
```

###### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.putToolsetTool.parameter.toolset"></a>

- *Type:* str

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#toolset CesExample#toolset}

---

###### `tool_id`<sup>Optional</sup> <a name="tool_id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.putToolsetTool.parameter.toolId"></a>

- *Type:* str

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_example#tool_id CesExample#tool_id}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tool` <a name="reset_tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetTool"></a>

```python
def reset_tool() -> None
```

##### `reset_toolset_tool` <a name="reset_toolset_tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool"></a>

```python
def reset_toolset_tool() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool">toolset_tool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference">CesExampleMessagesChunksToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolInput">tool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput">toolset_tool_input</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.tool">tool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `toolset_tool`<sup>Required</sup> <a name="toolset_tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool"></a>

```python
toolset_tool: CesExampleMessagesChunksToolResponseToolsetToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference">CesExampleMessagesChunksToolResponseToolsetToolOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `tool_input`<sup>Optional</sup> <a name="tool_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolInput"></a>

```python
tool_input: str
```

- *Type:* str

---

##### `toolset_tool_input`<sup>Optional</sup> <a name="toolset_tool_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput"></a>

```python
toolset_tool_input: CesExampleMessagesChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.tool"></a>

```python
tool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.internalValue"></a>

```python
internal_value: CesExampleMessagesChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

---


### CesExampleMessagesChunksToolResponseToolsetToolOutputReference <a name="CesExampleMessagesChunksToolResponseToolsetToolOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId">reset_tool_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tool_id` <a name="reset_tool_id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId"></a>

```python
def reset_tool_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput">tool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput">toolset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId">tool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tool_id_input`<sup>Optional</sup> <a name="tool_id_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```python
tool_id_input: str
```

- *Type:* str

---

##### `toolset_input`<sup>Optional</sup> <a name="toolset_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```python
toolset_input: str
```

- *Type:* str

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue"></a>

```python
internal_value: CesExampleMessagesChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

---


### CesExampleMessagesList <a name="CesExampleMessagesList" id="@cdktn/provider-google.cesExample.CesExampleMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesExampleMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesExampleMessages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>]

---


### CesExampleMessagesOutputReference <a name="CesExampleMessagesOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleMessagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.putChunks">put_chunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetChunks">reset_chunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetRole">reset_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_chunks` <a name="put_chunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.putChunks"></a>

```python
def put_chunks(
  value: IResolvable | typing.List[CesExampleMessagesChunks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.putChunks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>]

---

##### `reset_chunks` <a name="reset_chunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetChunks"></a>

```python
def reset_chunks() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetRole"></a>

```python
def reset_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunks">chunks</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList">CesExampleMessagesChunksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunksInput">chunks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chunks`<sup>Required</sup> <a name="chunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunks"></a>

```python
chunks: CesExampleMessagesChunksList
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList">CesExampleMessagesChunksList</a>

---

##### `chunks_input`<sup>Optional</sup> <a name="chunks_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunksInput"></a>

```python
chunks_input: IResolvable | typing.List[CesExampleMessagesChunks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesExampleMessages
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>

---


### CesExampleTimeoutsOutputReference <a name="CesExampleTimeoutsOutputReference" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_example

cesExample.CesExampleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesExampleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a>

---



