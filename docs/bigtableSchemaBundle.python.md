# `bigtableSchemaBundle` Submodule <a name="`bigtableSchemaBundle` Submodule" id="@cdktn/provider-google.bigtableSchemaBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableSchemaBundle <a name="BigtableSchemaBundle" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle google_bigtable_schema_bundle}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer"></a>

```python
from cdktn_provider_google import bigtable_schema_bundle

bigtableSchemaBundle.BigtableSchemaBundle(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  proto_schema: BigtableSchemaBundleProtoSchema,
  schema_bundle_id: str,
  deletion_policy: str = None,
  id: str = None,
  ignore_warnings: bool | IResolvable = None,
  instance: str = None,
  project: str = None,
  table: str = None,
  timeouts: BigtableSchemaBundleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.protoSchema">proto_schema</a></code> | <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a></code> | proto_schema block. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.schemaBundleId">schema_bundle_id</a></code> | <code>str</code> | The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#id BigtableSchemaBundle#id}. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.ignoreWarnings">ignore_warnings</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, allow backwards incompatible changes. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The name of the instance to create the schema bundle within. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#project BigtableSchemaBundle#project}. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.table">table</a></code> | <code>str</code> | The name of the table to create the schema bundle within. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `proto_schema`<sup>Required</sup> <a name="proto_schema" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.protoSchema"></a>

- *Type:* <a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

proto_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#proto_schema BigtableSchemaBundle#proto_schema}

---

##### `schema_bundle_id`<sup>Required</sup> <a name="schema_bundle_id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.schemaBundleId"></a>

- *Type:* str

The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#schema_bundle_id BigtableSchemaBundle#schema_bundle_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#deletion_policy BigtableSchemaBundle#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#id BigtableSchemaBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_warnings`<sup>Optional</sup> <a name="ignore_warnings" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.ignoreWarnings"></a>

- *Type:* bool | cdktn.IResolvable

If true, allow backwards incompatible changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#ignore_warnings BigtableSchemaBundle#ignore_warnings}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.instance"></a>

- *Type:* str

The name of the instance to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#instance BigtableSchemaBundle#instance}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#project BigtableSchemaBundle#project}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.table"></a>

- *Type:* str

The name of the table to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#table BigtableSchemaBundle#table}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#timeouts BigtableSchemaBundle#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putProtoSchema">put_proto_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetIgnoreWarnings">reset_ignore_warnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetInstance">reset_instance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTable">reset_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_proto_schema` <a name="put_proto_schema" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putProtoSchema"></a>

```python
def put_proto_schema(
  proto_descriptors: str
) -> None
```

###### `proto_descriptors`<sup>Required</sup> <a name="proto_descriptors" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putProtoSchema.parameter.protoDescriptors"></a>

- *Type:* str

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#proto_descriptors BigtableSchemaBundle#proto_descriptors}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#create BigtableSchemaBundle#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#delete BigtableSchemaBundle#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#update BigtableSchemaBundle#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_warnings` <a name="reset_ignore_warnings" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetIgnoreWarnings"></a>

```python
def reset_ignore_warnings() -> None
```

##### `reset_instance` <a name="reset_instance" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetInstance"></a>

```python
def reset_instance() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTable"></a>

```python
def reset_table() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BigtableSchemaBundle resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isConstruct"></a>

```python
from cdktn_provider_google import bigtable_schema_bundle

bigtableSchemaBundle.BigtableSchemaBundle.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformElement"></a>

```python
from cdktn_provider_google import bigtable_schema_bundle

bigtableSchemaBundle.BigtableSchemaBundle.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformResource"></a>

```python
from cdktn_provider_google import bigtable_schema_bundle

bigtableSchemaBundle.BigtableSchemaBundle.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport"></a>

```python
from cdktn_provider_google import bigtable_schema_bundle

bigtableSchemaBundle.BigtableSchemaBundle.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BigtableSchemaBundle resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigtableSchemaBundle to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigtableSchemaBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BigtableSchemaBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchema">proto_schema</a></code> | <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference">BigtableSchemaBundleProtoSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference">BigtableSchemaBundleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarningsInput">ignore_warnings_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchemaInput">proto_schema_input</a></code> | <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleIdInput">schema_bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tableInput">table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarnings">ignore_warnings</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleId">schema_bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.table">table</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `proto_schema`<sup>Required</sup> <a name="proto_schema" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchema"></a>

```python
proto_schema: BigtableSchemaBundleProtoSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference">BigtableSchemaBundleProtoSchemaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeouts"></a>

```python
timeouts: BigtableSchemaBundleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference">BigtableSchemaBundleTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_warnings_input`<sup>Optional</sup> <a name="ignore_warnings_input" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarningsInput"></a>

```python
ignore_warnings_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `proto_schema_input`<sup>Optional</sup> <a name="proto_schema_input" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchemaInput"></a>

```python
proto_schema_input: BigtableSchemaBundleProtoSchema
```

- *Type:* <a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

---

##### `schema_bundle_id_input`<sup>Optional</sup> <a name="schema_bundle_id_input" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleIdInput"></a>

```python
schema_bundle_id_input: str
```

- *Type:* str

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tableInput"></a>

```python
table_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BigtableSchemaBundleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_warnings`<sup>Required</sup> <a name="ignore_warnings" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarnings"></a>

```python
ignore_warnings: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `schema_bundle_id`<sup>Required</sup> <a name="schema_bundle_id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleId"></a>

```python
schema_bundle_id: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.table"></a>

```python
table: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableSchemaBundleConfig <a name="BigtableSchemaBundleConfig" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.Initializer"></a>

```python
from cdktn_provider_google import bigtable_schema_bundle

bigtableSchemaBundle.BigtableSchemaBundleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  proto_schema: BigtableSchemaBundleProtoSchema,
  schema_bundle_id: str,
  deletion_policy: str = None,
  id: str = None,
  ignore_warnings: bool | IResolvable = None,
  instance: str = None,
  project: str = None,
  table: str = None,
  timeouts: BigtableSchemaBundleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.protoSchema">proto_schema</a></code> | <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a></code> | proto_schema block. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.schemaBundleId">schema_bundle_id</a></code> | <code>str</code> | The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#id BigtableSchemaBundle#id}. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.ignoreWarnings">ignore_warnings</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, allow backwards incompatible changes. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.instance">instance</a></code> | <code>str</code> | The name of the instance to create the schema bundle within. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#project BigtableSchemaBundle#project}. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.table">table</a></code> | <code>str</code> | The name of the table to create the schema bundle within. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `proto_schema`<sup>Required</sup> <a name="proto_schema" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.protoSchema"></a>

```python
proto_schema: BigtableSchemaBundleProtoSchema
```

- *Type:* <a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

proto_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#proto_schema BigtableSchemaBundle#proto_schema}

---

##### `schema_bundle_id`<sup>Required</sup> <a name="schema_bundle_id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.schemaBundleId"></a>

```python
schema_bundle_id: str
```

- *Type:* str

The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#schema_bundle_id BigtableSchemaBundle#schema_bundle_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#deletion_policy BigtableSchemaBundle#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#id BigtableSchemaBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_warnings`<sup>Optional</sup> <a name="ignore_warnings" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.ignoreWarnings"></a>

```python
ignore_warnings: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, allow backwards incompatible changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#ignore_warnings BigtableSchemaBundle#ignore_warnings}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The name of the instance to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#instance BigtableSchemaBundle#instance}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#project BigtableSchemaBundle#project}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.table"></a>

```python
table: str
```

- *Type:* str

The name of the table to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#table BigtableSchemaBundle#table}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.timeouts"></a>

```python
timeouts: BigtableSchemaBundleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#timeouts BigtableSchemaBundle#timeouts}

---

### BigtableSchemaBundleProtoSchema <a name="BigtableSchemaBundleProtoSchema" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema.Initializer"></a>

```python
from cdktn_provider_google import bigtable_schema_bundle

bigtableSchemaBundle.BigtableSchemaBundleProtoSchema(
  proto_descriptors: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema.property.protoDescriptors">proto_descriptors</a></code> | <code>str</code> | Base64 encoded content of the file. |

---

##### `proto_descriptors`<sup>Required</sup> <a name="proto_descriptors" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema.property.protoDescriptors"></a>

```python
proto_descriptors: str
```

- *Type:* str

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#proto_descriptors BigtableSchemaBundle#proto_descriptors}

---

### BigtableSchemaBundleTimeouts <a name="BigtableSchemaBundleTimeouts" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.Initializer"></a>

```python
from cdktn_provider_google import bigtable_schema_bundle

bigtableSchemaBundle.BigtableSchemaBundleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#create BigtableSchemaBundle#create}. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#delete BigtableSchemaBundle#delete}. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#update BigtableSchemaBundle#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#create BigtableSchemaBundle#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#delete BigtableSchemaBundle#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigtable_schema_bundle#update BigtableSchemaBundle#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableSchemaBundleProtoSchemaOutputReference <a name="BigtableSchemaBundleProtoSchemaOutputReference" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigtable_schema_bundle

bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptorsInput">proto_descriptors_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptors">proto_descriptors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `proto_descriptors_input`<sup>Optional</sup> <a name="proto_descriptors_input" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptorsInput"></a>

```python
proto_descriptors_input: str
```

- *Type:* str

---

##### `proto_descriptors`<sup>Required</sup> <a name="proto_descriptors" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptors"></a>

```python
proto_descriptors: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.internalValue"></a>

```python
internal_value: BigtableSchemaBundleProtoSchema
```

- *Type:* <a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

---


### BigtableSchemaBundleTimeoutsOutputReference <a name="BigtableSchemaBundleTimeoutsOutputReference" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigtable_schema_bundle

bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BigtableSchemaBundleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a>

---



