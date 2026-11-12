# `dataLineageOpenLineageJob` Submodule <a name="`dataLineageOpenLineageJob` Submodule" id="@cdktn/provider-google.dataLineageOpenLineageJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLineageOpenLineageJob <a name="DataLineageOpenLineageJob" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job google_data_lineage_open_lineage_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  namespace: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  input: IResolvable | typing.List[DataLineageOpenLineageJobInput] = None,
  output: IResolvable | typing.List[DataLineageOpenLineageJobOutput] = None,
  timeouts: DataLineageOpenLineageJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Namespace of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the OpenLineage job. Changes to description do not trigger updates. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#id DataLineageOpenLineageJob#id}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.input">input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>]</code> | input block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.output">output</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>]</code> | output block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.name"></a>

- *Type:* str

Name of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.namespace"></a>

- *Type:* str

Namespace of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#deletion_policy DataLineageOpenLineageJob#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.description"></a>

- *Type:* str

Description of the OpenLineage job. Changes to description do not trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#description DataLineageOpenLineageJob#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#id DataLineageOpenLineageJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.input"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#input DataLineageOpenLineageJob#input}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.output"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#output DataLineageOpenLineageJob#output}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#timeouts DataLineageOpenLineageJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput">put_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput">put_output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOutput">reset_output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_input` <a name="put_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput"></a>

```python
def put_input(
  value: IResolvable | typing.List[DataLineageOpenLineageJobInput]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>]

---

##### `put_output` <a name="put_output" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput"></a>

```python
def put_output(
  value: IResolvable | typing.List[DataLineageOpenLineageJobOutput]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#create DataLineageOpenLineageJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#delete DataLineageOpenLineageJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#update DataLineageOpenLineageJob#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_output` <a name="reset_output" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOutput"></a>

```python
def reset_output() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataLineageOpenLineageJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataLineageOpenLineageJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataLineageOpenLineageJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.input">input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList">DataLineageOpenLineageJobInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.output">output</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList">DataLineageOpenLineageJobOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.process">process</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.run">run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference">DataLineageOpenLineageJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.inputInput">input_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.outputInput">output_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.input"></a>

```python
input: DataLineageOpenLineageJobInputList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList">DataLineageOpenLineageJobInputList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.output"></a>

```python
output: DataLineageOpenLineageJobOutputList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList">DataLineageOpenLineageJobOutputList</a>

---

##### `process`<sup>Required</sup> <a name="process" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.process"></a>

```python
process: str
```

- *Type:* str

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.run"></a>

```python
run: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeouts"></a>

```python
timeouts: DataLineageOpenLineageJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference">DataLineageOpenLineageJobTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.inputInput"></a>

```python
input_input: IResolvable | typing.List[DataLineageOpenLineageJobInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.outputInput"></a>

```python
output_input: IResolvable | typing.List[DataLineageOpenLineageJobOutput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataLineageOpenLineageJobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataLineageOpenLineageJobConfig <a name="DataLineageOpenLineageJobConfig" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  namespace: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  input: IResolvable | typing.List[DataLineageOpenLineageJobInput] = None,
  output: IResolvable | typing.List[DataLineageOpenLineageJobOutput] = None,
  timeouts: DataLineageOpenLineageJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.name">name</a></code> | <code>str</code> | Name of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.description">description</a></code> | <code>str</code> | Description of the OpenLineage job. Changes to description do not trigger updates. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#id DataLineageOpenLineageJob#id}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.input">input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>]</code> | input block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.output">output</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>]</code> | output block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#deletion_policy DataLineageOpenLineageJob#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the OpenLineage job. Changes to description do not trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#description DataLineageOpenLineageJob#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#id DataLineageOpenLineageJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.input"></a>

```python
input: IResolvable | typing.List[DataLineageOpenLineageJobInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#input DataLineageOpenLineageJob#input}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.output"></a>

```python
output: IResolvable | typing.List[DataLineageOpenLineageJobOutput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#output DataLineageOpenLineageJob#output}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.timeouts"></a>

```python
timeouts: DataLineageOpenLineageJobTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#timeouts DataLineageOpenLineageJob#timeouts}

---

### DataLineageOpenLineageJobInput <a name="DataLineageOpenLineageJobInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobInput(
  name: str,
  namespace: str,
  catalog: DataLineageOpenLineageJobInputCatalog = None,
  symlink: IResolvable | typing.List[DataLineageOpenLineageJobInputSymlink] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.name">name</a></code> | <code>str</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.symlink">symlink</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>]</code> | symlink block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.catalog"></a>

```python
catalog: DataLineageOpenLineageJobInputCatalog
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#catalog DataLineageOpenLineageJob#catalog}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.symlink"></a>

```python
symlink: IResolvable | typing.List[DataLineageOpenLineageJobInputSymlink]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>]

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#symlink DataLineageOpenLineageJob#symlink}

---

### DataLineageOpenLineageJobInputCatalog <a name="DataLineageOpenLineageJobInputCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog(
  framework: str,
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.framework">framework</a></code> | <code>str</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.name">name</a></code> | <code>str</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.type">type</a></code> | <code>str</code> | Catalog entity type. |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.framework"></a>

```python
framework: str
```

- *Type:* str

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#framework DataLineageOpenLineageJob#framework}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.type"></a>

```python
type: str
```

- *Type:* str

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobInputSymlink <a name="DataLineageOpenLineageJobInputSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink(
  name: str,
  namespace: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.name">name</a></code> | <code>str</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.type">type</a></code> | <code>str</code> | Type of the symlink target. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobOutput <a name="DataLineageOpenLineageJobOutput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput(
  name: str,
  namespace: str,
  catalog: DataLineageOpenLineageJobOutputCatalog = None,
  column_lineage: DataLineageOpenLineageJobOutputColumnLineage = None,
  symlink: IResolvable | typing.List[DataLineageOpenLineageJobOutputSymlink] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.name">name</a></code> | <code>str</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.columnLineage">column_lineage</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | column_lineage block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.symlink">symlink</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>]</code> | symlink block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.catalog"></a>

```python
catalog: DataLineageOpenLineageJobOutputCatalog
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#catalog DataLineageOpenLineageJob#catalog}

---

##### `column_lineage`<sup>Optional</sup> <a name="column_lineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.columnLineage"></a>

```python
column_lineage: DataLineageOpenLineageJobOutputColumnLineage
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

column_lineage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#column_lineage DataLineageOpenLineageJob#column_lineage}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.symlink"></a>

```python
symlink: IResolvable | typing.List[DataLineageOpenLineageJobOutputSymlink]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>]

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#symlink DataLineageOpenLineageJob#symlink}

---

### DataLineageOpenLineageJobOutputCatalog <a name="DataLineageOpenLineageJobOutputCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog(
  framework: str,
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.framework">framework</a></code> | <code>str</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.name">name</a></code> | <code>str</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.type">type</a></code> | <code>str</code> | Catalog entity type. |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.framework"></a>

```python
framework: str
```

- *Type:* str

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#framework DataLineageOpenLineageJob#framework}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.type"></a>

```python
type: str
```

- *Type:* str

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobOutputColumnLineage <a name="DataLineageOpenLineageJobOutputColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage(
  field: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageField],
  dataset_input: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageDatasetInput] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.field">field</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>]</code> | field block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.datasetInput">dataset_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]</code> | dataset_input block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.field"></a>

```python
field: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageField]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>]

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.datasetInput"></a>

```python
dataset_input: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageDatasetInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]

dataset_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#dataset_input DataLineageOpenLineageJob#dataset_input}

---

### DataLineageOpenLineageJobOutputColumnLineageDatasetInput <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput(
  field: str,
  name: str,
  namespace: str,
  transformation: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field">field</a></code> | <code>str</code> | Source field name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name">name</a></code> | <code>str</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation">transformation</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>]</code> | transformation block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field"></a>

```python
field: str
```

- *Type:* str

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation"></a>

```python
transformation: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>]

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#transformation DataLineageOpenLineageJob#transformation}

---

### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation(
  type: str,
  subtype: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type">type</a></code> | <code>str</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype">subtype</a></code> | <code>str</code> | Transformation subtype. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type"></a>

```python
type: str
```

- *Type:* str

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#subtype DataLineageOpenLineageJob#subtype}

---

### DataLineageOpenLineageJobOutputColumnLineageField <a name="DataLineageOpenLineageJobOutputColumnLineageField" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField(
  input: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageFieldInput],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.input">input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>]</code> | input block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.name">name</a></code> | <code>str</code> | Output field name. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.input"></a>

```python
input: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageFieldInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#input DataLineageOpenLineageJob#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.name"></a>

```python
name: str
```

- *Type:* str

Output field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

### DataLineageOpenLineageJobOutputColumnLineageFieldInput <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput(
  field: str,
  name: str,
  namespace: str,
  transformation: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field">field</a></code> | <code>str</code> | Source field name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name">name</a></code> | <code>str</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation">transformation</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>]</code> | transformation block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field"></a>

```python
field: str
```

- *Type:* str

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation"></a>

```python
transformation: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>]

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#transformation DataLineageOpenLineageJob#transformation}

---

### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation(
  type: str,
  subtype: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type">type</a></code> | <code>str</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype">subtype</a></code> | <code>str</code> | Transformation subtype. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type"></a>

```python
type: str
```

- *Type:* str

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#subtype DataLineageOpenLineageJob#subtype}

---

### DataLineageOpenLineageJobOutputSymlink <a name="DataLineageOpenLineageJobOutputSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink(
  name: str,
  namespace: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.name">name</a></code> | <code>str</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.type">type</a></code> | <code>str</code> | Type of the symlink target. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobTimeouts <a name="DataLineageOpenLineageJobTimeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#create DataLineageOpenLineageJob#create}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#delete DataLineageOpenLineageJob#delete}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#update DataLineageOpenLineageJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#create DataLineageOpenLineageJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#delete DataLineageOpenLineageJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#update DataLineageOpenLineageJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLineageOpenLineageJobInputCatalogOutputReference <a name="DataLineageOpenLineageJobInputCatalogOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput">framework_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.framework">framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `framework_input`<sup>Optional</sup> <a name="framework_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput"></a>

```python
framework_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.framework"></a>

```python
framework: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue"></a>

```python
internal_value: DataLineageOpenLineageJobInputCatalog
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

---


### DataLineageOpenLineageJobInputList <a name="DataLineageOpenLineageJobInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLineageOpenLineageJobInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataLineageOpenLineageJobInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>]

---


### DataLineageOpenLineageJobInputOutputReference <a name="DataLineageOpenLineageJobInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog">put_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink">put_symlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetSymlink">reset_symlink</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_catalog` <a name="put_catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog"></a>

```python
def put_catalog(
  framework: str,
  name: str,
  type: str
) -> None
```

###### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog.parameter.framework"></a>

- *Type:* str

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#framework DataLineageOpenLineageJob#framework}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog.parameter.name"></a>

- *Type:* str

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog.parameter.type"></a>

- *Type:* str

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

##### `put_symlink` <a name="put_symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink"></a>

```python
def put_symlink(
  value: IResolvable | typing.List[DataLineageOpenLineageJobInputSymlink]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>]

---

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_symlink` <a name="reset_symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetSymlink"></a>

```python
def reset_symlink() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference">DataLineageOpenLineageJobInputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlink">symlink</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList">DataLineageOpenLineageJobInputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalogInput">catalog_input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlinkInput">symlink_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalog"></a>

```python
catalog: DataLineageOpenLineageJobInputCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference">DataLineageOpenLineageJobInputCatalogOutputReference</a>

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlink"></a>

```python
symlink: DataLineageOpenLineageJobInputSymlinkList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList">DataLineageOpenLineageJobInputSymlinkList</a>

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalogInput"></a>

```python
catalog_input: DataLineageOpenLineageJobInputCatalog
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `symlink_input`<sup>Optional</sup> <a name="symlink_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlinkInput"></a>

```python
symlink_input: IResolvable | typing.List[DataLineageOpenLineageJobInputSymlink]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataLineageOpenLineageJobInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>

---


### DataLineageOpenLineageJobInputSymlinkList <a name="DataLineageOpenLineageJobInputSymlinkList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLineageOpenLineageJobInputSymlinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataLineageOpenLineageJobInputSymlink]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>]

---


### DataLineageOpenLineageJobInputSymlinkOutputReference <a name="DataLineageOpenLineageJobInputSymlinkOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataLineageOpenLineageJobInputSymlink
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>

---


### DataLineageOpenLineageJobOutputCatalogOutputReference <a name="DataLineageOpenLineageJobOutputCatalogOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput">framework_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.framework">framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `framework_input`<sup>Optional</sup> <a name="framework_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput"></a>

```python
framework_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.framework"></a>

```python
framework: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue"></a>

```python
internal_value: DataLineageOpenLineageJobOutputCatalog
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputList <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageDatasetInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation">put_transformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation">reset_transformation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_transformation` <a name="put_transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation"></a>

```python
def put_transformation(
  value: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>]

---

##### `reset_transformation` <a name="reset_transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation"></a>

```python
def reset_transformation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput">transformation_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation"></a>

```python
transformation: DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a>

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `transformation_input`<sup>Optional</sup> <a name="transformation_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput"></a>

```python
transformation_input: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataLineageOpenLineageJobOutputColumnLineageDatasetInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>]

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype">reset_subtype</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subtype` <a name="reset_subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype"></a>

```python
def reset_subtype() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput">subtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype">subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subtype_input`<sup>Optional</sup> <a name="subtype_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput"></a>

```python
subtype_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageFieldInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>]

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation">put_transformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation">reset_transformation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_transformation` <a name="put_transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation"></a>

```python
def put_transformation(
  value: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>]

---

##### `reset_transformation` <a name="reset_transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation"></a>

```python
def reset_transformation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput">transformation_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation"></a>

```python
transformation: DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a>

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `transformation_input`<sup>Optional</sup> <a name="transformation_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput"></a>

```python
transformation_input: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataLineageOpenLineageJobOutputColumnLineageFieldInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>]

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype">reset_subtype</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subtype` <a name="reset_subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype"></a>

```python
def reset_subtype() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput">subtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype">subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subtype_input`<sup>Optional</sup> <a name="subtype_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput"></a>

```python
subtype_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageField]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>]

---


### DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput">put_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input` <a name="put_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput"></a>

```python
def put_input(
  value: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageFieldInput]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input">input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList">DataLineageOpenLineageJobOutputColumnLineageFieldInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput">input_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input"></a>

```python
input: DataLineageOpenLineageJobOutputColumnLineageFieldInputList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList">DataLineageOpenLineageJobOutputColumnLineageFieldInputList</a>

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput"></a>

```python
input_input: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageFieldInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataLineageOpenLineageJobOutputColumnLineageField
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>

---


### DataLineageOpenLineageJobOutputColumnLineageOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput">put_dataset_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField">put_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput">reset_dataset_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dataset_input` <a name="put_dataset_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput"></a>

```python
def put_dataset_input(
  value: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageDatasetInput]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]

---

##### `put_field` <a name="put_field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField"></a>

```python
def put_field(
  value: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageField]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>]

---

##### `reset_dataset_input` <a name="reset_dataset_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput"></a>

```python
def reset_dataset_input() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput">dataset_input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field">field</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList">DataLineageOpenLineageJobOutputColumnLineageFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput">dataset_input_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput">field_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_input`<sup>Required</sup> <a name="dataset_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput"></a>

```python
dataset_input: DataLineageOpenLineageJobOutputColumnLineageDatasetInputList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field"></a>

```python
field: DataLineageOpenLineageJobOutputColumnLineageFieldList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList">DataLineageOpenLineageJobOutputColumnLineageFieldList</a>

---

##### `dataset_input_input`<sup>Optional</sup> <a name="dataset_input_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput"></a>

```python
dataset_input_input: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageDatasetInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput"></a>

```python
field_input: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageField]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue"></a>

```python
internal_value: DataLineageOpenLineageJobOutputColumnLineage
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

---


### DataLineageOpenLineageJobOutputList <a name="DataLineageOpenLineageJobOutputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLineageOpenLineageJobOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataLineageOpenLineageJobOutput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>]

---


### DataLineageOpenLineageJobOutputOutputReference <a name="DataLineageOpenLineageJobOutputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog">put_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage">put_column_lineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink">put_symlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetColumnLineage">reset_column_lineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetSymlink">reset_symlink</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_catalog` <a name="put_catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog"></a>

```python
def put_catalog(
  framework: str,
  name: str,
  type: str
) -> None
```

###### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog.parameter.framework"></a>

- *Type:* str

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#framework DataLineageOpenLineageJob#framework}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog.parameter.name"></a>

- *Type:* str

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog.parameter.type"></a>

- *Type:* str

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

##### `put_column_lineage` <a name="put_column_lineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage"></a>

```python
def put_column_lineage(
  field: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageField],
  dataset_input: IResolvable | typing.List[DataLineageOpenLineageJobOutputColumnLineageDatasetInput] = None
) -> None
```

###### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage.parameter.field"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>]

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

###### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage.parameter.datasetInput"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]

dataset_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#dataset_input DataLineageOpenLineageJob#dataset_input}

---

##### `put_symlink` <a name="put_symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink"></a>

```python
def put_symlink(
  value: IResolvable | typing.List[DataLineageOpenLineageJobOutputSymlink]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>]

---

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_column_lineage` <a name="reset_column_lineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetColumnLineage"></a>

```python
def reset_column_lineage() -> None
```

##### `reset_symlink` <a name="reset_symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetSymlink"></a>

```python
def reset_symlink() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference">DataLineageOpenLineageJobOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineage">column_lineage</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference">DataLineageOpenLineageJobOutputColumnLineageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlink">symlink</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList">DataLineageOpenLineageJobOutputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalogInput">catalog_input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput">column_lineage_input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlinkInput">symlink_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalog"></a>

```python
catalog: DataLineageOpenLineageJobOutputCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference">DataLineageOpenLineageJobOutputCatalogOutputReference</a>

---

##### `column_lineage`<sup>Required</sup> <a name="column_lineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineage"></a>

```python
column_lineage: DataLineageOpenLineageJobOutputColumnLineageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference">DataLineageOpenLineageJobOutputColumnLineageOutputReference</a>

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlink"></a>

```python
symlink: DataLineageOpenLineageJobOutputSymlinkList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList">DataLineageOpenLineageJobOutputSymlinkList</a>

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalogInput"></a>

```python
catalog_input: DataLineageOpenLineageJobOutputCatalog
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

---

##### `column_lineage_input`<sup>Optional</sup> <a name="column_lineage_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput"></a>

```python
column_lineage_input: DataLineageOpenLineageJobOutputColumnLineage
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `symlink_input`<sup>Optional</sup> <a name="symlink_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlinkInput"></a>

```python
symlink_input: IResolvable | typing.List[DataLineageOpenLineageJobOutputSymlink]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataLineageOpenLineageJobOutput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>

---


### DataLineageOpenLineageJobOutputSymlinkList <a name="DataLineageOpenLineageJobOutputSymlinkList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLineageOpenLineageJobOutputSymlinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataLineageOpenLineageJobOutputSymlink]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>]

---


### DataLineageOpenLineageJobOutputSymlinkOutputReference <a name="DataLineageOpenLineageJobOutputSymlinkOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataLineageOpenLineageJobOutputSymlink
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>

---


### DataLineageOpenLineageJobTimeoutsOutputReference <a name="DataLineageOpenLineageJobTimeoutsOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_open_lineage_job

dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataLineageOpenLineageJobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

---



