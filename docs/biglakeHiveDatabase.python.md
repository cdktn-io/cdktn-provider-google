# `biglakeHiveDatabase` Submodule <a name="`biglakeHiveDatabase` Submodule" id="@cdktn/provider-google.biglakeHiveDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeHiveDatabase <a name="BiglakeHiveDatabase" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database google_biglake_hive_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_database

biglakeHiveDatabase.BiglakeHiveDatabase(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog: str,
  name: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  location_uri: str = None,
  parameters: typing.Mapping[str] = None,
  project: str = None,
  timeouts: BiglakeHiveDatabaseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | Hive catalog where the database to create is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.name">name</a></code> | <code>str</code> | Database to create. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the database. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#id BiglakeHiveDatabase#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.locationUri">location_uri</a></code> | <code>str</code> | Cloud Storage location path where the database exists. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Additional parameters associated with the database. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#project BiglakeHiveDatabase#project}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.catalog"></a>

- *Type:* str

Hive catalog where the database to create is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#catalog BiglakeHiveDatabase#catalog}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.name"></a>

- *Type:* str

Database to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#name BiglakeHiveDatabase#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#deletion_policy BiglakeHiveDatabase#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.description"></a>

- *Type:* str

Description of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#description BiglakeHiveDatabase#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#id BiglakeHiveDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.locationUri"></a>

- *Type:* str

Cloud Storage location path where the database exists.

If unspecified, the database will be stored in the catalog location.
Format: gs://bucket/path/to/database

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#location_uri BiglakeHiveDatabase#location_uri}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Additional parameters associated with the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#parameters BiglakeHiveDatabase#parameters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#project BiglakeHiveDatabase#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#timeouts BiglakeHiveDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetLocationUri">reset_location_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#create BiglakeHiveDatabase#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#delete BiglakeHiveDatabase#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#update BiglakeHiveDatabase#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location_uri` <a name="reset_location_uri" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetLocationUri"></a>

```python
def reset_location_uri() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BiglakeHiveDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isConstruct"></a>

```python
from cdktn_provider_google import biglake_hive_database

biglakeHiveDatabase.BiglakeHiveDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isTerraformElement"></a>

```python
from cdktn_provider_google import biglake_hive_database

biglakeHiveDatabase.BiglakeHiveDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isTerraformResource"></a>

```python
from cdktn_provider_google import biglake_hive_database

biglakeHiveDatabase.BiglakeHiveDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.generateConfigForImport"></a>

```python
from cdktn_provider_google import biglake_hive_database

biglakeHiveDatabase.BiglakeHiveDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BiglakeHiveDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BiglakeHiveDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BiglakeHiveDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeHiveDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference">BiglakeHiveDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.locationUriInput">location_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.timeouts"></a>

```python
timeouts: BiglakeHiveDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference">BiglakeHiveDatabaseTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_uri_input`<sup>Optional</sup> <a name="location_uri_input" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.locationUriInput"></a>

```python
location_uri_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BiglakeHiveDatabaseTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeHiveDatabaseConfig <a name="BiglakeHiveDatabaseConfig" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_database

biglakeHiveDatabase.BiglakeHiveDatabaseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog: str,
  name: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  location_uri: str = None,
  parameters: typing.Mapping[str] = None,
  project: str = None,
  timeouts: BiglakeHiveDatabaseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.catalog">catalog</a></code> | <code>str</code> | Hive catalog where the database to create is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.name">name</a></code> | <code>str</code> | Database to create. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.description">description</a></code> | <code>str</code> | Description of the database. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#id BiglakeHiveDatabase#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.locationUri">location_uri</a></code> | <code>str</code> | Cloud Storage location path where the database exists. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Additional parameters associated with the database. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#project BiglakeHiveDatabase#project}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Hive catalog where the database to create is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#catalog BiglakeHiveDatabase#catalog}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Database to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#name BiglakeHiveDatabase#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#deletion_policy BiglakeHiveDatabase#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#description BiglakeHiveDatabase#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#id BiglakeHiveDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

Cloud Storage location path where the database exists.

If unspecified, the database will be stored in the catalog location.
Format: gs://bucket/path/to/database

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#location_uri BiglakeHiveDatabase#location_uri}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Additional parameters associated with the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#parameters BiglakeHiveDatabase#parameters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#project BiglakeHiveDatabase#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.timeouts"></a>

```python
timeouts: BiglakeHiveDatabaseTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#timeouts BiglakeHiveDatabase#timeouts}

---

### BiglakeHiveDatabaseTimeouts <a name="BiglakeHiveDatabaseTimeouts" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_database

biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#create BiglakeHiveDatabase#create}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#delete BiglakeHiveDatabase#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#update BiglakeHiveDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#create BiglakeHiveDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#delete BiglakeHiveDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#update BiglakeHiveDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeHiveDatabaseTimeoutsOutputReference <a name="BiglakeHiveDatabaseTimeoutsOutputReference" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_database

biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BiglakeHiveDatabaseTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a>

---



