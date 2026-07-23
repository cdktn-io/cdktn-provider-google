# `apigeeDatastore` Submodule <a name="`apigeeDatastore` Submodule" id="@cdktn/provider-google.apigeeDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeDatastore <a name="ApigeeDatastore" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore google_apigee_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer"></a>

```python
from cdktn_provider_google import apigee_datastore

apigeeDatastore.ApigeeDatastore(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  datastore_config: ApigeeDatastoreDatastoreConfig,
  display_name: str,
  org_id: str,
  target_type: str,
  deletion_policy: str = None,
  id: str = None,
  timeouts: ApigeeDatastoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.datastoreConfig">datastore_config</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a></code> | datastore_config block. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the datastore. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee datastore, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.targetType">target_type</a></code> | <code>str</code> | The type of target for the datastore. Must be 'gcs' for Google Cloud Storage or 'bigquery' for BigQuery. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#id ApigeeDatastore#id}. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `datastore_config`<sup>Required</sup> <a name="datastore_config" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.datastoreConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a>

datastore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#datastore_config ApigeeDatastore#datastore_config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#display_name ApigeeDatastore#display_name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the Apigee datastore, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#org_id ApigeeDatastore#org_id}

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.targetType"></a>

- *Type:* str

The type of target for the datastore. Must be 'gcs' for Google Cloud Storage or 'bigquery' for BigQuery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#target_type ApigeeDatastore#target_type}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#deletion_policy ApigeeDatastore#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#id ApigeeDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#timeouts ApigeeDatastore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putDatastoreConfig">put_datastore_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_datastore_config` <a name="put_datastore_config" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putDatastoreConfig"></a>

```python
def put_datastore_config(
  project_id: str,
  bucket_name: str = None,
  dataset_name: str = None,
  path: str = None,
  table_prefix: str = None
) -> None
```

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putDatastoreConfig.parameter.projectId"></a>

- *Type:* str

The GCP project ID that the datastore target resides in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#project_id ApigeeDatastore#project_id}

---

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putDatastoreConfig.parameter.bucketName"></a>

- *Type:* str

The name of the Cloud Storage bucket. Required for 'gcs' target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#bucket_name ApigeeDatastore#bucket_name}

---

###### `dataset_name`<sup>Optional</sup> <a name="dataset_name" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putDatastoreConfig.parameter.datasetName"></a>

- *Type:* str

The name of the BigQuery dataset. Required for 'bigquery' target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#dataset_name ApigeeDatastore#dataset_name}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putDatastoreConfig.parameter.path"></a>

- *Type:* str

The path within the Cloud Storage bucket. Used for 'gcs' target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#path ApigeeDatastore#path}

---

###### `table_prefix`<sup>Optional</sup> <a name="table_prefix" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putDatastoreConfig.parameter.tablePrefix"></a>

- *Type:* str

The prefix for BigQuery table names. Used for 'bigquery' target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#table_prefix ApigeeDatastore#table_prefix}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#create ApigeeDatastore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#delete ApigeeDatastore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#update ApigeeDatastore#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApigeeDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isConstruct"></a>

```python
from cdktn_provider_google import apigee_datastore

apigeeDatastore.ApigeeDatastore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isTerraformElement"></a>

```python
from cdktn_provider_google import apigee_datastore

apigeeDatastore.ApigeeDatastore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isTerraformResource"></a>

```python
from cdktn_provider_google import apigee_datastore

apigeeDatastore.ApigeeDatastore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.generateConfigForImport"></a>

```python
from cdktn_provider_google import apigee_datastore

apigeeDatastore.ApigeeDatastore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApigeeDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeDatastore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.datastoreConfig">datastore_config</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference">ApigeeDatastoreDatastoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.lastUpdateTime">last_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.org">org</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.selfAttribute">self_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference">ApigeeDatastoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.datastoreConfigInput">datastore_config_input</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.targetTypeInput">target_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `datastore_config`<sup>Required</sup> <a name="datastore_config" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.datastoreConfig"></a>

```python
datastore_config: ApigeeDatastoreDatastoreConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference">ApigeeDatastoreDatastoreConfigOutputReference</a>

---

##### `last_update_time`<sup>Required</sup> <a name="last_update_time" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.lastUpdateTime"></a>

```python
last_update_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.org"></a>

```python
org: str
```

- *Type:* str

---

##### `self_attribute`<sup>Required</sup> <a name="self_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.selfAttribute"></a>

```python
self_attribute: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.timeouts"></a>

```python
timeouts: ApigeeDatastoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference">ApigeeDatastoreTimeoutsOutputReference</a>

---

##### `datastore_config_input`<sup>Optional</sup> <a name="datastore_config_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.datastoreConfigInput"></a>

```python
datastore_config_input: ApigeeDatastoreDatastoreConfig
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `target_type_input`<sup>Optional</sup> <a name="target_type_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.targetTypeInput"></a>

```python
target_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApigeeDatastoreTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeDatastoreConfig <a name="ApigeeDatastoreConfig" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.Initializer"></a>

```python
from cdktn_provider_google import apigee_datastore

apigeeDatastore.ApigeeDatastoreConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  datastore_config: ApigeeDatastoreDatastoreConfig,
  display_name: str,
  org_id: str,
  target_type: str,
  deletion_policy: str = None,
  id: str = None,
  timeouts: ApigeeDatastoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.datastoreConfig">datastore_config</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a></code> | datastore_config block. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the datastore. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee datastore, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.targetType">target_type</a></code> | <code>str</code> | The type of target for the datastore. Must be 'gcs' for Google Cloud Storage or 'bigquery' for BigQuery. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#id ApigeeDatastore#id}. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `datastore_config`<sup>Required</sup> <a name="datastore_config" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.datastoreConfig"></a>

```python
datastore_config: ApigeeDatastoreDatastoreConfig
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a>

datastore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#datastore_config ApigeeDatastore#datastore_config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#display_name ApigeeDatastore#display_name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the Apigee datastore, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#org_id ApigeeDatastore#org_id}

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

The type of target for the datastore. Must be 'gcs' for Google Cloud Storage or 'bigquery' for BigQuery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#target_type ApigeeDatastore#target_type}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#deletion_policy ApigeeDatastore#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#id ApigeeDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.timeouts"></a>

```python
timeouts: ApigeeDatastoreTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#timeouts ApigeeDatastore#timeouts}

---

### ApigeeDatastoreDatastoreConfig <a name="ApigeeDatastoreDatastoreConfig" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.Initializer"></a>

```python
from cdktn_provider_google import apigee_datastore

apigeeDatastore.ApigeeDatastoreDatastoreConfig(
  project_id: str,
  bucket_name: str = None,
  dataset_name: str = None,
  path: str = None,
  table_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.projectId">project_id</a></code> | <code>str</code> | The GCP project ID that the datastore target resides in. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | The name of the Cloud Storage bucket. Required for 'gcs' target type. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.datasetName">dataset_name</a></code> | <code>str</code> | The name of the BigQuery dataset. Required for 'bigquery' target type. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.path">path</a></code> | <code>str</code> | The path within the Cloud Storage bucket. Used for 'gcs' target type. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.tablePrefix">table_prefix</a></code> | <code>str</code> | The prefix for BigQuery table names. Used for 'bigquery' target type. |

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The GCP project ID that the datastore target resides in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#project_id ApigeeDatastore#project_id}

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The name of the Cloud Storage bucket. Required for 'gcs' target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#bucket_name ApigeeDatastore#bucket_name}

---

##### `dataset_name`<sup>Optional</sup> <a name="dataset_name" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

The name of the BigQuery dataset. Required for 'bigquery' target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#dataset_name ApigeeDatastore#dataset_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The path within the Cloud Storage bucket. Used for 'gcs' target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#path ApigeeDatastore#path}

---

##### `table_prefix`<sup>Optional</sup> <a name="table_prefix" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

The prefix for BigQuery table names. Used for 'bigquery' target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#table_prefix ApigeeDatastore#table_prefix}

---

### ApigeeDatastoreTimeouts <a name="ApigeeDatastoreTimeouts" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts.Initializer"></a>

```python
from cdktn_provider_google import apigee_datastore

apigeeDatastore.ApigeeDatastoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#create ApigeeDatastore#create}. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#delete ApigeeDatastore#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#update ApigeeDatastore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#create ApigeeDatastore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#delete ApigeeDatastore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#update ApigeeDatastore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeDatastoreDatastoreConfigOutputReference <a name="ApigeeDatastoreDatastoreConfigOutputReference" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apigee_datastore

apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetDatasetName">reset_dataset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetTablePrefix">reset_table_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_dataset_name` <a name="reset_dataset_name" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetDatasetName"></a>

```python
def reset_dataset_name() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_table_prefix` <a name="reset_table_prefix" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetTablePrefix"></a>

```python
def reset_table_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.datasetNameInput">dataset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.tablePrefixInput">table_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.datasetName">dataset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.tablePrefix">table_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `dataset_name_input`<sup>Optional</sup> <a name="dataset_name_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.datasetNameInput"></a>

```python
dataset_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_prefix_input`<sup>Optional</sup> <a name="table_prefix_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.tablePrefixInput"></a>

```python
table_prefix_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `dataset_name`<sup>Required</sup> <a name="dataset_name" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_prefix`<sup>Required</sup> <a name="table_prefix" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeDatastoreDatastoreConfig
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a>

---


### ApigeeDatastoreTimeoutsOutputReference <a name="ApigeeDatastoreTimeoutsOutputReference" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apigee_datastore

apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigeeDatastoreTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a>

---



