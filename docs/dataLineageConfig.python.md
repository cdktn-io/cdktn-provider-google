# `dataLineageConfig` Submodule <a name="`dataLineageConfig` Submodule" id="@cdktn/provider-google.dataLineageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLineageConfig <a name="DataLineageConfig" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config google_data_lineage_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ingestion: DataLineageConfigIngestion,
  location: str,
  parent: str,
  id: str = None,
  timeouts: DataLineageConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.ingestion">ingestion</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a></code> | ingestion block. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The region of the data lineage configuration for integration. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Parent scope for the config. Format: projects/{project-id\|project-number} or folders/{folder-number} or organizations/{organization-number}. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#id DataLineageConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ingestion`<sup>Required</sup> <a name="ingestion" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.ingestion"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a>

ingestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#ingestion DataLineageConfig#ingestion}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.location"></a>

- *Type:* str

The region of the data lineage configuration for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#location DataLineageConfig#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.parent"></a>

- *Type:* str

Parent scope for the config. Format: projects/{project-id|project-number} or folders/{folder-number} or organizations/{organization-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#parent DataLineageConfig#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#id DataLineageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#timeouts DataLineageConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.putIngestion">put_ingestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ingestion` <a name="put_ingestion" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.putIngestion"></a>

```python
def put_ingestion(
  rule: IResolvable | typing.List[DataLineageConfigIngestionRule]
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.putIngestion.parameter.rule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#rule DataLineageConfig#rule}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#create DataLineageConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#delete DataLineageConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#update DataLineageConfig#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataLineageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isConstruct"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isTerraformElement"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isTerraformResource"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataLineageConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataLineageConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataLineageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataLineageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.ingestion">ingestion</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference">DataLineageConfigIngestionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference">DataLineageConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.ingestionInput">ingestion_input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `ingestion`<sup>Required</sup> <a name="ingestion" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.ingestion"></a>

```python
ingestion: DataLineageConfigIngestionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference">DataLineageConfigIngestionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.timeouts"></a>

```python
timeouts: DataLineageConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference">DataLineageConfigTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingestion_input`<sup>Optional</sup> <a name="ingestion_input" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.ingestionInput"></a>

```python
ingestion_input: DataLineageConfigIngestion
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataLineageConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataLineageConfigConfig <a name="DataLineageConfigConfig" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ingestion: DataLineageConfigIngestion,
  location: str,
  parent: str,
  id: str = None,
  timeouts: DataLineageConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.ingestion">ingestion</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a></code> | ingestion block. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.location">location</a></code> | <code>str</code> | The region of the data lineage configuration for integration. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.parent">parent</a></code> | <code>str</code> | Parent scope for the config. Format: projects/{project-id\|project-number} or folders/{folder-number} or organizations/{organization-number}. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#id DataLineageConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ingestion`<sup>Required</sup> <a name="ingestion" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.ingestion"></a>

```python
ingestion: DataLineageConfigIngestion
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a>

ingestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#ingestion DataLineageConfig#ingestion}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The region of the data lineage configuration for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#location DataLineageConfig#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Parent scope for the config. Format: projects/{project-id|project-number} or folders/{folder-number} or organizations/{organization-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#parent DataLineageConfig#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#id DataLineageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.timeouts"></a>

```python
timeouts: DataLineageConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#timeouts DataLineageConfig#timeouts}

---

### DataLineageConfigIngestion <a name="DataLineageConfigIngestion" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfigIngestion(
  rule: IResolvable | typing.List[DataLineageConfigIngestionRule]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion.property.rule">rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>]</code> | rule block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion.property.rule"></a>

```python
rule: IResolvable | typing.List[DataLineageConfigIngestionRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#rule DataLineageConfig#rule}

---

### DataLineageConfigIngestionRule <a name="DataLineageConfigIngestionRule" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfigIngestionRule(
  integration_selector: DataLineageConfigIngestionRuleIntegrationSelector,
  lineage_enablement: DataLineageConfigIngestionRuleLineageEnablement
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule.property.integrationSelector">integration_selector</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector">DataLineageConfigIngestionRuleIntegrationSelector</a></code> | integration_selector block. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule.property.lineageEnablement">lineage_enablement</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement">DataLineageConfigIngestionRuleLineageEnablement</a></code> | lineage_enablement block. |

---

##### `integration_selector`<sup>Required</sup> <a name="integration_selector" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule.property.integrationSelector"></a>

```python
integration_selector: DataLineageConfigIngestionRuleIntegrationSelector
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector">DataLineageConfigIngestionRuleIntegrationSelector</a>

integration_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#integration_selector DataLineageConfig#integration_selector}

---

##### `lineage_enablement`<sup>Required</sup> <a name="lineage_enablement" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule.property.lineageEnablement"></a>

```python
lineage_enablement: DataLineageConfigIngestionRuleLineageEnablement
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement">DataLineageConfigIngestionRuleLineageEnablement</a>

lineage_enablement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#lineage_enablement DataLineageConfig#lineage_enablement}

---

### DataLineageConfigIngestionRuleIntegrationSelector <a name="DataLineageConfigIngestionRuleIntegrationSelector" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector(
  integration: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector.property.integration">integration</a></code> | <code>str</code> | Integration to which the rule applies. Possible values: ["DATAPROC", "LOOKER_CORE"]. |

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector.property.integration"></a>

```python
integration: str
```

- *Type:* str

Integration to which the rule applies. Possible values: ["DATAPROC", "LOOKER_CORE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#integration DataLineageConfig#integration}

---

### DataLineageConfigIngestionRuleLineageEnablement <a name="DataLineageConfigIngestionRuleLineageEnablement" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement(
  enabled: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether ingestion of lineage should be enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether ingestion of lineage should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#enabled DataLineageConfig#enabled}

---

### DataLineageConfigTimeouts <a name="DataLineageConfigTimeouts" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#create DataLineageConfig#create}. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#delete DataLineageConfig#delete}. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#update DataLineageConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#create DataLineageConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#delete DataLineageConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#update DataLineageConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLineageConfigIngestionOutputReference <a name="DataLineageConfigIngestionOutputReference" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfigIngestionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.putRule">put_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule` <a name="put_rule" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.putRule"></a>

```python
def put_rule(
  value: IResolvable | typing.List[DataLineageConfigIngestionRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList">DataLineageConfigIngestionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.rule"></a>

```python
rule: DataLineageConfigIngestionRuleList
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList">DataLineageConfigIngestionRuleList</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.ruleInput"></a>

```python
rule_input: IResolvable | typing.List[DataLineageConfigIngestionRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.internalValue"></a>

```python
internal_value: DataLineageConfigIngestion
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a>

---


### DataLineageConfigIngestionRuleIntegrationSelectorOutputReference <a name="DataLineageConfigIngestionRuleIntegrationSelectorOutputReference" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integrationInput">integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integration">integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector">DataLineageConfigIngestionRuleIntegrationSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `integration_input`<sup>Optional</sup> <a name="integration_input" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integrationInput"></a>

```python
integration_input: str
```

- *Type:* str

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integration"></a>

```python
integration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.internalValue"></a>

```python
internal_value: DataLineageConfigIngestionRuleIntegrationSelector
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector">DataLineageConfigIngestionRuleIntegrationSelector</a>

---


### DataLineageConfigIngestionRuleLineageEnablementOutputReference <a name="DataLineageConfigIngestionRuleLineageEnablementOutputReference" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement">DataLineageConfigIngestionRuleLineageEnablement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.internalValue"></a>

```python
internal_value: DataLineageConfigIngestionRuleLineageEnablement
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement">DataLineageConfigIngestionRuleLineageEnablement</a>

---


### DataLineageConfigIngestionRuleList <a name="DataLineageConfigIngestionRuleList" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfigIngestionRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLineageConfigIngestionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataLineageConfigIngestionRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>]

---


### DataLineageConfigIngestionRuleOutputReference <a name="DataLineageConfigIngestionRuleOutputReference" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfigIngestionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.putIntegrationSelector">put_integration_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.putLineageEnablement">put_lineage_enablement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_integration_selector` <a name="put_integration_selector" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.putIntegrationSelector"></a>

```python
def put_integration_selector(
  integration: str
) -> None
```

###### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.putIntegrationSelector.parameter.integration"></a>

- *Type:* str

Integration to which the rule applies. Possible values: ["DATAPROC", "LOOKER_CORE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#integration DataLineageConfig#integration}

---

##### `put_lineage_enablement` <a name="put_lineage_enablement" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.putLineageEnablement"></a>

```python
def put_lineage_enablement(
  enabled: bool | IResolvable
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.putLineageEnablement.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether ingestion of lineage should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/data_lineage_config#enabled DataLineageConfig#enabled}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.integrationSelector">integration_selector</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference">DataLineageConfigIngestionRuleIntegrationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.lineageEnablement">lineage_enablement</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference">DataLineageConfigIngestionRuleLineageEnablementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.integrationSelectorInput">integration_selector_input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector">DataLineageConfigIngestionRuleIntegrationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.lineageEnablementInput">lineage_enablement_input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement">DataLineageConfigIngestionRuleLineageEnablement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `integration_selector`<sup>Required</sup> <a name="integration_selector" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.integrationSelector"></a>

```python
integration_selector: DataLineageConfigIngestionRuleIntegrationSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference">DataLineageConfigIngestionRuleIntegrationSelectorOutputReference</a>

---

##### `lineage_enablement`<sup>Required</sup> <a name="lineage_enablement" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.lineageEnablement"></a>

```python
lineage_enablement: DataLineageConfigIngestionRuleLineageEnablementOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference">DataLineageConfigIngestionRuleLineageEnablementOutputReference</a>

---

##### `integration_selector_input`<sup>Optional</sup> <a name="integration_selector_input" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.integrationSelectorInput"></a>

```python
integration_selector_input: DataLineageConfigIngestionRuleIntegrationSelector
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector">DataLineageConfigIngestionRuleIntegrationSelector</a>

---

##### `lineage_enablement_input`<sup>Optional</sup> <a name="lineage_enablement_input" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.lineageEnablementInput"></a>

```python
lineage_enablement_input: DataLineageConfigIngestionRuleLineageEnablement
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement">DataLineageConfigIngestionRuleLineageEnablement</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataLineageConfigIngestionRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>

---


### DataLineageConfigTimeoutsOutputReference <a name="DataLineageConfigTimeoutsOutputReference" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_lineage_config

dataLineageConfig.DataLineageConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataLineageConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a>

---



