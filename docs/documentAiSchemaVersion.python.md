# `documentAiSchemaVersion` Submodule <a name="`documentAiSchemaVersion` Submodule" id="@cdktn/provider-google.documentAiSchemaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocumentAiSchemaVersion <a name="DocumentAiSchemaVersion" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version google_document_ai_schema_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  location: str,
  schema: DocumentAiSchemaVersionSchema,
  schema_id: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DocumentAiSchemaVersionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-defined name of the SchemaVersion. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.schemaId">schema_id</a></code> | <code>str</code> | The schema id that this schema version belongs to. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#id DocumentAiSchemaVersion#id}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The Google Cloud labels for the SchemaVersion. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#project DocumentAiSchemaVersion#project}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.displayName"></a>

- *Type:* str

The user-defined name of the SchemaVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#location DocumentAiSchemaVersion#location}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#schema DocumentAiSchemaVersion#schema}

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.schemaId"></a>

- *Type:* str

The schema id that this schema version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#schema_id DocumentAiSchemaVersion#schema_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#deletion_policy DocumentAiSchemaVersion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#id DocumentAiSchemaVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The Google Cloud labels for the SchemaVersion.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#labels DocumentAiSchemaVersion#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#project DocumentAiSchemaVersion#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#timeouts DocumentAiSchemaVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema">put_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_schema` <a name="put_schema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema"></a>

```python
def put_schema(
  description: str = None,
  display_name: str = None,
  document_prompt: str = None,
  entity_types: IResolvable | typing.List[DocumentAiSchemaVersionSchemaEntityTypes] = None,
  metadata: DocumentAiSchemaVersionSchemaMetadata = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema.parameter.description"></a>

- *Type:* str

Description of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#description DocumentAiSchemaVersion#description}

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema.parameter.displayName"></a>

- *Type:* str

Display name to show users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

###### `document_prompt`<sup>Optional</sup> <a name="document_prompt" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema.parameter.documentPrompt"></a>

- *Type:* str

Document-level prompt provided by the user.

This custom text is injected into the AI model's prompt to provide extra, document-wide guidance for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_prompt DocumentAiSchemaVersion#document_prompt}

---

###### `entity_types`<sup>Optional</sup> <a name="entity_types" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema.parameter.entityTypes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>]

entity_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#entity_types DocumentAiSchemaVersion#entity_types}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema.parameter.metadata"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#metadata DocumentAiSchemaVersion#metadata}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#create DocumentAiSchemaVersion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#delete DocumentAiSchemaVersion#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#update DocumentAiSchemaVersion#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isConstruct"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformElement"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformResource"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DocumentAiSchemaVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DocumentAiSchemaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DocumentAiSchemaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference">DocumentAiSchemaVersionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference">DocumentAiSchemaVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaIdInput">schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaInput">schema_input</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schema"></a>

```python
schema: DocumentAiSchemaVersionSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference">DocumentAiSchemaVersionSchemaOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeouts"></a>

```python
timeouts: DocumentAiSchemaVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference">DocumentAiSchemaVersionTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaIdInput"></a>

```python
schema_id_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaInput"></a>

```python
schema_input: DocumentAiSchemaVersionSchema
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DocumentAiSchemaVersionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DocumentAiSchemaVersionConfig <a name="DocumentAiSchemaVersionConfig" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  location: str,
  schema: DocumentAiSchemaVersionSchema,
  schema_id: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DocumentAiSchemaVersionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-defined name of the SchemaVersion. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schemaId">schema_id</a></code> | <code>str</code> | The schema id that this schema version belongs to. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#id DocumentAiSchemaVersion#id}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The Google Cloud labels for the SchemaVersion. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#project DocumentAiSchemaVersion#project}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-defined name of the SchemaVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#location DocumentAiSchemaVersion#location}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schema"></a>

```python
schema: DocumentAiSchemaVersionSchema
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#schema DocumentAiSchemaVersion#schema}

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

The schema id that this schema version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#schema_id DocumentAiSchemaVersion#schema_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#deletion_policy DocumentAiSchemaVersion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#id DocumentAiSchemaVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The Google Cloud labels for the SchemaVersion.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#labels DocumentAiSchemaVersion#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#project DocumentAiSchemaVersion#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.timeouts"></a>

```python
timeouts: DocumentAiSchemaVersionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#timeouts DocumentAiSchemaVersion#timeouts}

---

### DocumentAiSchemaVersionSchema <a name="DocumentAiSchemaVersionSchema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionSchema(
  description: str = None,
  display_name: str = None,
  document_prompt: str = None,
  entity_types: IResolvable | typing.List[DocumentAiSchemaVersionSchemaEntityTypes] = None,
  metadata: DocumentAiSchemaVersionSchemaMetadata = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.description">description</a></code> | <code>str</code> | Description of the schema. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.displayName">display_name</a></code> | <code>str</code> | Display name to show users. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.documentPrompt">document_prompt</a></code> | <code>str</code> | Document-level prompt provided by the user. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.entityTypes">entity_types</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>]</code> | entity_types block. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a></code> | metadata block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#description DocumentAiSchemaVersion#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name to show users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `document_prompt`<sup>Optional</sup> <a name="document_prompt" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.documentPrompt"></a>

```python
document_prompt: str
```

- *Type:* str

Document-level prompt provided by the user.

This custom text is injected into the AI model's prompt to provide extra, document-wide guidance for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_prompt DocumentAiSchemaVersion#document_prompt}

---

##### `entity_types`<sup>Optional</sup> <a name="entity_types" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.entityTypes"></a>

```python
entity_types: IResolvable | typing.List[DocumentAiSchemaVersionSchemaEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>]

entity_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#entity_types DocumentAiSchemaVersion#entity_types}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.metadata"></a>

```python
metadata: DocumentAiSchemaVersionSchemaMetadata
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#metadata DocumentAiSchemaVersion#metadata}

---

### DocumentAiSchemaVersionSchemaEntityTypes <a name="DocumentAiSchemaVersionSchemaEntityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes(
  name: str,
  base_types: typing.List[str] = None,
  display_name: str = None,
  enum_values: DocumentAiSchemaVersionSchemaEntityTypesEnumValues = None,
  properties: IResolvable | typing.List[DocumentAiSchemaVersionSchemaEntityTypesProperties] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.name">name</a></code> | <code>str</code> | Name of the type. It must be unique within the schema file and cannot be a "Common Type". |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes">base_types</a></code> | <code>typing.List[str]</code> | The entity type that this type is derived from. For now, one and only one should be set. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.displayName">display_name</a></code> | <code>str</code> | User defined name for the type. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.enumValues">enum_values</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | enum_values block. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.properties">properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>]</code> | properties block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the type. It must be unique within the schema file and cannot be a "Common Type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#name DocumentAiSchemaVersion#name}

---

##### `base_types`<sup>Optional</sup> <a name="base_types" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes"></a>

```python
base_types: typing.List[str]
```

- *Type:* typing.List[str]

The entity type that this type is derived from. For now, one and only one should be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#base_types DocumentAiSchemaVersion#base_types}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User defined name for the type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `enum_values`<sup>Optional</sup> <a name="enum_values" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.enumValues"></a>

```python
enum_values: DocumentAiSchemaVersionSchemaEntityTypesEnumValues
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

enum_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#enum_values DocumentAiSchemaVersion#enum_values}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.properties"></a>

```python
properties: IResolvable | typing.List[DocumentAiSchemaVersionSchemaEntityTypesProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#properties DocumentAiSchemaVersion#properties}

---

### DocumentAiSchemaVersionSchemaEntityTypesEnumValues <a name="DocumentAiSchemaVersionSchemaEntityTypesEnumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues(
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values">values</a></code> | <code>typing.List[str]</code> | The individual values that this enum values type can include. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The individual values that this enum values type can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#values DocumentAiSchemaVersion#values}

---

### DocumentAiSchemaVersionSchemaEntityTypesProperties <a name="DocumentAiSchemaVersionSchemaEntityTypesProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties(
  name: str,
  value_type: str,
  display_name: str = None,
  method: str = None,
  occurrence_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.name">name</a></code> | <code>str</code> | The name of the property. Follows the same guidelines as the EntityType name. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType">value_type</a></code> | <code>str</code> | A reference to the value type of the property. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName">display_name</a></code> | <code>str</code> | User defined name for the property. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.method">method</a></code> | <code>str</code> | Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"]. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType">occurrence_type</a></code> | <code>str</code> | Occurrence type limits the number of instances an entity type appears in the document. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the property. Follows the same guidelines as the EntityType name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#name DocumentAiSchemaVersion#name}

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

A reference to the value type of the property.

This type is subject to the same conventions as the 'Entity.base_types' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#value_type DocumentAiSchemaVersion#value_type}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User defined name for the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.method"></a>

```python
method: str
```

- *Type:* str

Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#method DocumentAiSchemaVersion#method}

---

##### `occurrence_type`<sup>Optional</sup> <a name="occurrence_type" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType"></a>

```python
occurrence_type: str
```

- *Type:* str

Occurrence type limits the number of instances an entity type appears in the document.

Possible values: ["OPTIONAL_ONCE", "OPTIONAL_MULTIPLE", "REQUIRED_ONCE", "REQUIRED_MULTIPLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#occurrence_type DocumentAiSchemaVersion#occurrence_type}

---

### DocumentAiSchemaVersionSchemaMetadata <a name="DocumentAiSchemaVersionSchemaMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata(
  document_allow_multiple_labels: bool | IResolvable = None,
  document_splitter: bool | IResolvable = None,
  prefixed_naming_on_properties: bool | IResolvable = None,
  skip_naming_validation: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels">document_allow_multiple_labels</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, on a given page, there can be multiple 'document' annotations covering it. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentSplitter">document_splitter</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, a 'document' entity type can be applied to subdocument (splitting). |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties">prefixed_naming_on_properties</a></code> | <code>bool \| cdktn.IResolvable</code> | If set, all the nested entities must be prefixed with the parents. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation">skip_naming_validation</a></code> | <code>bool \| cdktn.IResolvable</code> | If set, this will skip the naming format validation in the schema. |

---

##### `document_allow_multiple_labels`<sup>Optional</sup> <a name="document_allow_multiple_labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels"></a>

```python
document_allow_multiple_labels: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, on a given page, there can be multiple 'document' annotations covering it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_allow_multiple_labels DocumentAiSchemaVersion#document_allow_multiple_labels}

---

##### `document_splitter`<sup>Optional</sup> <a name="document_splitter" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentSplitter"></a>

```python
document_splitter: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, a 'document' entity type can be applied to subdocument (splitting).

Otherwise, it can only be applied to the entire document (classification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_splitter DocumentAiSchemaVersion#document_splitter}

---

##### `prefixed_naming_on_properties`<sup>Optional</sup> <a name="prefixed_naming_on_properties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties"></a>

```python
prefixed_naming_on_properties: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set, all the nested entities must be prefixed with the parents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#prefixed_naming_on_properties DocumentAiSchemaVersion#prefixed_naming_on_properties}

---

##### `skip_naming_validation`<sup>Optional</sup> <a name="skip_naming_validation" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation"></a>

```python
skip_naming_validation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set, this will skip the naming format validation in the schema.

So the string values in 'DocumentSchema.EntityType.name' and 'DocumentSchema.EntityType.Property.name' will not be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#skip_naming_validation DocumentAiSchemaVersion#skip_naming_validation}

---

### DocumentAiSchemaVersionTimeouts <a name="DocumentAiSchemaVersionTimeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#create DocumentAiSchemaVersion#create}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#delete DocumentAiSchemaVersion#delete}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#update DocumentAiSchemaVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#create DocumentAiSchemaVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#delete DocumentAiSchemaVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#update DocumentAiSchemaVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference <a name="DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_values` <a name="reset_values" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue"></a>

```python
internal_value: DocumentAiSchemaVersionSchemaEntityTypesEnumValues
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---


### DocumentAiSchemaVersionSchemaEntityTypesList <a name="DocumentAiSchemaVersionSchemaEntityTypesList" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DocumentAiSchemaVersionSchemaEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DocumentAiSchemaVersionSchemaEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>]

---


### DocumentAiSchemaVersionSchemaEntityTypesOutputReference <a name="DocumentAiSchemaVersionSchemaEntityTypesOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues">put_enum_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes">reset_base_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues">reset_enum_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_enum_values` <a name="put_enum_values" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues"></a>

```python
def put_enum_values(
  values: typing.List[str] = None
) -> None
```

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues.parameter.values"></a>

- *Type:* typing.List[str]

The individual values that this enum values type can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#values DocumentAiSchemaVersion#values}

---

##### `put_properties` <a name="put_properties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties"></a>

```python
def put_properties(
  value: IResolvable | typing.List[DocumentAiSchemaVersionSchemaEntityTypesProperties]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>]

---

##### `reset_base_types` <a name="reset_base_types" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes"></a>

```python
def reset_base_types() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enum_values` <a name="reset_enum_values" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues"></a>

```python
def reset_enum_values() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues">enum_values</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList">DocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput">base_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput">enum_values_input</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput">properties_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes">base_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enum_values`<sup>Required</sup> <a name="enum_values" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues"></a>

```python
enum_values: DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties"></a>

```python
properties: DocumentAiSchemaVersionSchemaEntityTypesPropertiesList
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList">DocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a>

---

##### `base_types_input`<sup>Optional</sup> <a name="base_types_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput"></a>

```python
base_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enum_values_input`<sup>Optional</sup> <a name="enum_values_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput"></a>

```python
enum_values_input: DocumentAiSchemaVersionSchemaEntityTypesEnumValues
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput"></a>

```python
properties_input: IResolvable | typing.List[DocumentAiSchemaVersionSchemaEntityTypesProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>]

---

##### `base_types`<sup>Required</sup> <a name="base_types" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes"></a>

```python
base_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DocumentAiSchemaVersionSchemaEntityTypes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>

---


### DocumentAiSchemaVersionSchemaEntityTypesPropertiesList <a name="DocumentAiSchemaVersionSchemaEntityTypesPropertiesList" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DocumentAiSchemaVersionSchemaEntityTypesProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>]

---


### DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference <a name="DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType">reset_occurrence_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_occurrence_type` <a name="reset_occurrence_type" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType"></a>

```python
def reset_occurrence_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput">occurrence_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType">occurrence_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `occurrence_type_input`<sup>Optional</sup> <a name="occurrence_type_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput"></a>

```python
occurrence_type_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `occurrence_type`<sup>Required</sup> <a name="occurrence_type" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType"></a>

```python
occurrence_type: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DocumentAiSchemaVersionSchemaEntityTypesProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>

---


### DocumentAiSchemaVersionSchemaMetadataOutputReference <a name="DocumentAiSchemaVersionSchemaMetadataOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels">reset_document_allow_multiple_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter">reset_document_splitter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties">reset_prefixed_naming_on_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation">reset_skip_naming_validation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_document_allow_multiple_labels` <a name="reset_document_allow_multiple_labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels"></a>

```python
def reset_document_allow_multiple_labels() -> None
```

##### `reset_document_splitter` <a name="reset_document_splitter" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter"></a>

```python
def reset_document_splitter() -> None
```

##### `reset_prefixed_naming_on_properties` <a name="reset_prefixed_naming_on_properties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties"></a>

```python
def reset_prefixed_naming_on_properties() -> None
```

##### `reset_skip_naming_validation` <a name="reset_skip_naming_validation" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation"></a>

```python
def reset_skip_naming_validation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput">document_allow_multiple_labels_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput">document_splitter_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput">prefixed_naming_on_properties_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput">skip_naming_validation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels">document_allow_multiple_labels</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter">document_splitter</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties">prefixed_naming_on_properties</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation">skip_naming_validation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `document_allow_multiple_labels_input`<sup>Optional</sup> <a name="document_allow_multiple_labels_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput"></a>

```python
document_allow_multiple_labels_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `document_splitter_input`<sup>Optional</sup> <a name="document_splitter_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput"></a>

```python
document_splitter_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefixed_naming_on_properties_input`<sup>Optional</sup> <a name="prefixed_naming_on_properties_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput"></a>

```python
prefixed_naming_on_properties_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `skip_naming_validation_input`<sup>Optional</sup> <a name="skip_naming_validation_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput"></a>

```python
skip_naming_validation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `document_allow_multiple_labels`<sup>Required</sup> <a name="document_allow_multiple_labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels"></a>

```python
document_allow_multiple_labels: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `document_splitter`<sup>Required</sup> <a name="document_splitter" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter"></a>

```python
document_splitter: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefixed_naming_on_properties`<sup>Required</sup> <a name="prefixed_naming_on_properties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties"></a>

```python
prefixed_naming_on_properties: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `skip_naming_validation`<sup>Required</sup> <a name="skip_naming_validation" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation"></a>

```python
skip_naming_validation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DocumentAiSchemaVersionSchemaMetadata
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

---


### DocumentAiSchemaVersionSchemaOutputReference <a name="DocumentAiSchemaVersionSchemaOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putEntityTypes">put_entity_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt">reset_document_prompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes">reset_entity_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_entity_types` <a name="put_entity_types" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putEntityTypes"></a>

```python
def put_entity_types(
  value: IResolvable | typing.List[DocumentAiSchemaVersionSchemaEntityTypes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>]

---

##### `put_metadata` <a name="put_metadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata"></a>

```python
def put_metadata(
  document_allow_multiple_labels: bool | IResolvable = None,
  document_splitter: bool | IResolvable = None,
  prefixed_naming_on_properties: bool | IResolvable = None,
  skip_naming_validation: bool | IResolvable = None
) -> None
```

###### `document_allow_multiple_labels`<sup>Optional</sup> <a name="document_allow_multiple_labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.documentAllowMultipleLabels"></a>

- *Type:* bool | cdktn.IResolvable

If true, on a given page, there can be multiple 'document' annotations covering it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_allow_multiple_labels DocumentAiSchemaVersion#document_allow_multiple_labels}

---

###### `document_splitter`<sup>Optional</sup> <a name="document_splitter" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.documentSplitter"></a>

- *Type:* bool | cdktn.IResolvable

If true, a 'document' entity type can be applied to subdocument (splitting).

Otherwise, it can only be applied to the entire document (classification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_splitter DocumentAiSchemaVersion#document_splitter}

---

###### `prefixed_naming_on_properties`<sup>Optional</sup> <a name="prefixed_naming_on_properties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.prefixedNamingOnProperties"></a>

- *Type:* bool | cdktn.IResolvable

If set, all the nested entities must be prefixed with the parents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#prefixed_naming_on_properties DocumentAiSchemaVersion#prefixed_naming_on_properties}

---

###### `skip_naming_validation`<sup>Optional</sup> <a name="skip_naming_validation" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.skipNamingValidation"></a>

- *Type:* bool | cdktn.IResolvable

If set, this will skip the naming format validation in the schema.

So the string values in 'DocumentSchema.EntityType.name' and 'DocumentSchema.EntityType.Property.name' will not be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#skip_naming_validation DocumentAiSchemaVersion#skip_naming_validation}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_document_prompt` <a name="reset_document_prompt" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt"></a>

```python
def reset_document_prompt() -> None
```

##### `reset_entity_types` <a name="reset_entity_types" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes"></a>

```python
def reset_entity_types() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypes">entity_types</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList">DocumentAiSchemaVersionSchemaEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference">DocumentAiSchemaVersionSchemaMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput">document_prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput">entity_types_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt">document_prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_types`<sup>Required</sup> <a name="entity_types" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypes"></a>

```python
entity_types: DocumentAiSchemaVersionSchemaEntityTypesList
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList">DocumentAiSchemaVersionSchemaEntityTypesList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadata"></a>

```python
metadata: DocumentAiSchemaVersionSchemaMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference">DocumentAiSchemaVersionSchemaMetadataOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `document_prompt_input`<sup>Optional</sup> <a name="document_prompt_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput"></a>

```python
document_prompt_input: str
```

- *Type:* str

---

##### `entity_types_input`<sup>Optional</sup> <a name="entity_types_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput"></a>

```python
entity_types_input: IResolvable | typing.List[DocumentAiSchemaVersionSchemaEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadataInput"></a>

```python
metadata_input: DocumentAiSchemaVersionSchemaMetadata
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `document_prompt`<sup>Required</sup> <a name="document_prompt" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt"></a>

```python
document_prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.internalValue"></a>

```python
internal_value: DocumentAiSchemaVersionSchema
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

---


### DocumentAiSchemaVersionTimeoutsOutputReference <a name="DocumentAiSchemaVersionTimeoutsOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import document_ai_schema_version

documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DocumentAiSchemaVersionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

---



