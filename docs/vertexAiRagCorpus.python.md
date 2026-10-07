# `vertexAiRagCorpus` Submodule <a name="`vertexAiRagCorpus` Submodule" id="@cdktn/provider-google.vertexAiRagCorpus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiRagCorpus <a name="VertexAiRagCorpus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus google_vertex_ai_rag_corpus}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpus(
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
  region: str,
  deletion_policy: str = None,
  description: str = None,
  encryption_spec: VertexAiRagCorpusEncryptionSpec = None,
  id: str = None,
  project: str = None,
  timeouts: VertexAiRagCorpusTimeouts = None,
  vector_db_config: VertexAiRagCorpusVectorDbConfig = None,
  vertex_ai_search_config: VertexAiRagCorpusVertexAiSearchConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. The description of the RagCorpus. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.vectorDbConfig">vector_db_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | vector_db_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.vertexAiSearchConfig">vertex_ai_search_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | vertex_ai_search_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.displayName"></a>

- *Type:* str

Required.

The display name of the RagCorpus. The name can be up to 128
characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#display_name VertexAiRagCorpus#display_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.region"></a>

- *Type:* str

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#region VertexAiRagCorpus#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#deletion_policy VertexAiRagCorpus#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.description"></a>

- *Type:* str

Optional. The description of the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#description VertexAiRagCorpus#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#encryption_spec VertexAiRagCorpus#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#timeouts VertexAiRagCorpus#timeouts}

---

##### `vector_db_config`<sup>Optional</sup> <a name="vector_db_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.vectorDbConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

vector_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vector_db_config VertexAiRagCorpus#vector_db_config}

---

##### `vertex_ai_search_config`<sup>Optional</sup> <a name="vertex_ai_search_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.vertexAiSearchConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

vertex_ai_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_ai_search_config VertexAiRagCorpus#vertex_ai_search_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig">put_vector_db_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig">put_vertex_ai_search_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVectorDbConfig">reset_vector_db_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVertexAiSearchConfig">reset_vertex_ai_search_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect the resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the resource is
created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#kms_key_name VertexAiRagCorpus#kms_key_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#create VertexAiRagCorpus#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#delete VertexAiRagCorpus#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#update VertexAiRagCorpus#update}.

---

##### `put_vector_db_config` <a name="put_vector_db_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig"></a>

```python
def put_vector_db_config(
  api_auth: VertexAiRagCorpusVectorDbConfigApiAuth = None,
  pinecone: VertexAiRagCorpusVectorDbConfigPinecone = None,
  rag_embedding_model_config: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig = None,
  rag_managed_db: VertexAiRagCorpusVectorDbConfigRagManagedDb = None,
  vertex_vector_search: VertexAiRagCorpusVectorDbConfigVertexVectorSearch = None
) -> None
```

###### `api_auth`<sup>Optional</sup> <a name="api_auth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig.parameter.apiAuth"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

api_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_auth VertexAiRagCorpus#api_auth}

---

###### `pinecone`<sup>Optional</sup> <a name="pinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig.parameter.pinecone"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

pinecone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#pinecone VertexAiRagCorpus#pinecone}

---

###### `rag_embedding_model_config`<sup>Optional</sup> <a name="rag_embedding_model_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig.parameter.ragEmbeddingModelConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

rag_embedding_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#rag_embedding_model_config VertexAiRagCorpus#rag_embedding_model_config}

---

###### `rag_managed_db`<sup>Optional</sup> <a name="rag_managed_db" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig.parameter.ragManagedDb"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

rag_managed_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#rag_managed_db VertexAiRagCorpus#rag_managed_db}

---

###### `vertex_vector_search`<sup>Optional</sup> <a name="vertex_vector_search" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig.parameter.vertexVectorSearch"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

vertex_vector_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_vector_search VertexAiRagCorpus#vertex_vector_search}

---

##### `put_vertex_ai_search_config` <a name="put_vertex_ai_search_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig"></a>

```python
def put_vertex_ai_search_config(
  serving_config: str
) -> None
```

###### `serving_config`<sup>Required</sup> <a name="serving_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig.parameter.servingConfig"></a>

- *Type:* str

Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#serving_config VertexAiRagCorpus#serving_config}

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vector_db_config` <a name="reset_vector_db_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVectorDbConfig"></a>

```python
def reset_vector_db_config() -> None
```

##### `reset_vertex_ai_search_config` <a name="reset_vertex_ai_search_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVertexAiSearchConfig"></a>

```python
def reset_vertex_ai_search_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VertexAiRagCorpus resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isConstruct"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpus.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpus.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpus.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpus.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VertexAiRagCorpus resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VertexAiRagCorpus to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VertexAiRagCorpus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiRagCorpus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.corpusStatus">corpus_status</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList">VertexAiRagCorpusCorpusStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference">VertexAiRagCorpusEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference">VertexAiRagCorpusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfig">vector_db_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference">VertexAiRagCorpusVectorDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfig">vertex_ai_search_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference">VertexAiRagCorpusVertexAiSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfigInput">vector_db_config_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfigInput">vertex_ai_search_config_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `corpus_status`<sup>Required</sup> <a name="corpus_status" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.corpusStatus"></a>

```python
corpus_status: VertexAiRagCorpusCorpusStatusList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList">VertexAiRagCorpusCorpusStatusList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpec"></a>

```python
encryption_spec: VertexAiRagCorpusEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference">VertexAiRagCorpusEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeouts"></a>

```python
timeouts: VertexAiRagCorpusTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference">VertexAiRagCorpusTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `vector_db_config`<sup>Required</sup> <a name="vector_db_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfig"></a>

```python
vector_db_config: VertexAiRagCorpusVectorDbConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference">VertexAiRagCorpusVectorDbConfigOutputReference</a>

---

##### `vertex_ai_search_config`<sup>Required</sup> <a name="vertex_ai_search_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfig"></a>

```python
vertex_ai_search_config: VertexAiRagCorpusVertexAiSearchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference">VertexAiRagCorpusVertexAiSearchConfigOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpecInput"></a>

```python
encryption_spec_input: VertexAiRagCorpusEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | VertexAiRagCorpusTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

---

##### `vector_db_config_input`<sup>Optional</sup> <a name="vector_db_config_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfigInput"></a>

```python
vector_db_config_input: VertexAiRagCorpusVectorDbConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

---

##### `vertex_ai_search_config_input`<sup>Optional</sup> <a name="vertex_ai_search_config_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfigInput"></a>

```python
vertex_ai_search_config_input: VertexAiRagCorpusVertexAiSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiRagCorpusConfig <a name="VertexAiRagCorpusConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  region: str,
  deletion_policy: str = None,
  description: str = None,
  encryption_spec: VertexAiRagCorpusEncryptionSpec = None,
  id: str = None,
  project: str = None,
  timeouts: VertexAiRagCorpusTimeouts = None,
  vector_db_config: VertexAiRagCorpusVectorDbConfig = None,
  vertex_ai_search_config: VertexAiRagCorpusVertexAiSearchConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.displayName">display_name</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.region">region</a></code> | <code>str</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.description">description</a></code> | <code>str</code> | Optional. The description of the RagCorpus. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vectorDbConfig">vector_db_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | vector_db_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vertexAiSearchConfig">vertex_ai_search_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | vertex_ai_search_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required.

The display name of the RagCorpus. The name can be up to 128
characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#display_name VertexAiRagCorpus#display_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#region VertexAiRagCorpus#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#deletion_policy VertexAiRagCorpus#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. The description of the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#description VertexAiRagCorpus#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.encryptionSpec"></a>

```python
encryption_spec: VertexAiRagCorpusEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#encryption_spec VertexAiRagCorpus#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.timeouts"></a>

```python
timeouts: VertexAiRagCorpusTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#timeouts VertexAiRagCorpus#timeouts}

---

##### `vector_db_config`<sup>Optional</sup> <a name="vector_db_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vectorDbConfig"></a>

```python
vector_db_config: VertexAiRagCorpusVectorDbConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

vector_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vector_db_config VertexAiRagCorpus#vector_db_config}

---

##### `vertex_ai_search_config`<sup>Optional</sup> <a name="vertex_ai_search_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vertexAiSearchConfig"></a>

```python
vertex_ai_search_config: VertexAiRagCorpusVertexAiSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

vertex_ai_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_ai_search_config VertexAiRagCorpus#vertex_ai_search_config}

---

### VertexAiRagCorpusCorpusStatus <a name="VertexAiRagCorpusCorpusStatus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus()
```


### VertexAiRagCorpusEncryptionSpec <a name="VertexAiRagCorpusEncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Required. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect the resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the resource is
created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#kms_key_name VertexAiRagCorpus#kms_key_name}

---

### VertexAiRagCorpusTimeouts <a name="VertexAiRagCorpusTimeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#create VertexAiRagCorpus#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#delete VertexAiRagCorpus#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#update VertexAiRagCorpus#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#create VertexAiRagCorpus#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#delete VertexAiRagCorpus#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#update VertexAiRagCorpus#update}.

---

### VertexAiRagCorpusVectorDbConfig <a name="VertexAiRagCorpusVectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig(
  api_auth: VertexAiRagCorpusVectorDbConfigApiAuth = None,
  pinecone: VertexAiRagCorpusVectorDbConfigPinecone = None,
  rag_embedding_model_config: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig = None,
  rag_managed_db: VertexAiRagCorpusVectorDbConfigRagManagedDb = None,
  vertex_vector_search: VertexAiRagCorpusVectorDbConfigVertexVectorSearch = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.apiAuth">api_auth</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | api_auth block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.pinecone">pinecone</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | pinecone block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig">rag_embedding_model_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | rag_embedding_model_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragManagedDb">rag_managed_db</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | rag_managed_db block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch">vertex_vector_search</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | vertex_vector_search block. |

---

##### `api_auth`<sup>Optional</sup> <a name="api_auth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.apiAuth"></a>

```python
api_auth: VertexAiRagCorpusVectorDbConfigApiAuth
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

api_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_auth VertexAiRagCorpus#api_auth}

---

##### `pinecone`<sup>Optional</sup> <a name="pinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.pinecone"></a>

```python
pinecone: VertexAiRagCorpusVectorDbConfigPinecone
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

pinecone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#pinecone VertexAiRagCorpus#pinecone}

---

##### `rag_embedding_model_config`<sup>Optional</sup> <a name="rag_embedding_model_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig"></a>

```python
rag_embedding_model_config: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

rag_embedding_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#rag_embedding_model_config VertexAiRagCorpus#rag_embedding_model_config}

---

##### `rag_managed_db`<sup>Optional</sup> <a name="rag_managed_db" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragManagedDb"></a>

```python
rag_managed_db: VertexAiRagCorpusVectorDbConfigRagManagedDb
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

rag_managed_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#rag_managed_db VertexAiRagCorpus#rag_managed_db}

---

##### `vertex_vector_search`<sup>Optional</sup> <a name="vertex_vector_search" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch"></a>

```python
vertex_vector_search: VertexAiRagCorpusVectorDbConfigVertexVectorSearch
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

vertex_vector_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_vector_search VertexAiRagCorpus#vertex_vector_search}

---

### VertexAiRagCorpusVectorDbConfigApiAuth <a name="VertexAiRagCorpusVectorDbConfigApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth(
  api_key_config: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | api_key_config block. |

---

##### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig"></a>

```python
api_key_config: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_config VertexAiRagCorpus#api_key_config}

---

### VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig <a name="VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig(
  api_key_secret_version: str = None,
  api_key_string: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString">api_key_string</a></code> | <code>str</code> | The API key string. |

---

##### `api_key_secret_version`<sup>Optional</sup> <a name="api_key_secret_version" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_secret_version VertexAiRagCorpus#api_key_secret_version}

---

##### `api_key_string`<sup>Optional</sup> <a name="api_key_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString"></a>

```python
api_key_string: str
```

- *Type:* str

The API key string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_string VertexAiRagCorpus#api_key_string}

---

### VertexAiRagCorpusVectorDbConfigPinecone <a name="VertexAiRagCorpusVectorDbConfigPinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone(
  index_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.property.indexName">index_name</a></code> | <code>str</code> | Pinecone index name. This value cannot be changed after it's set. |

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

Pinecone index name. This value cannot be changed after it's set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index_name VertexAiRagCorpus#index_name}

---

### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig(
  vertex_prediction_endpoint: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint">vertex_prediction_endpoint</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | vertex_prediction_endpoint block. |

---

##### `vertex_prediction_endpoint`<sup>Optional</sup> <a name="vertex_prediction_endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint"></a>

```python
vertex_prediction_endpoint: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

vertex_prediction_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_prediction_endpoint VertexAiRagCorpus#vertex_prediction_endpoint}

---

### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint(
  endpoint: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint">endpoint</a></code> | <code>str</code> | Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#endpoint VertexAiRagCorpus#endpoint}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDb <a name="VertexAiRagCorpusVectorDbConfigRagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb(
  ann: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn = None,
  knn: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann">ann</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | ann block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn">knn</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | knn block. |

---

##### `ann`<sup>Optional</sup> <a name="ann" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann"></a>

```python
ann: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

ann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#ann VertexAiRagCorpus#ann}

---

##### `knn`<sup>Optional</sup> <a name="knn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn"></a>

```python
knn: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

knn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#knn VertexAiRagCorpus#knn}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDbAnn <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbAnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn(
  leaf_count: typing.Union[int, float] = None,
  tree_depth: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount">leaf_count</a></code> | <code>typing.Union[int, float]</code> | Number of leaf nodes in the tree-based structure. Default value is 500. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth">tree_depth</a></code> | <code>typing.Union[int, float]</code> | The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2. |

---

##### `leaf_count`<sup>Optional</sup> <a name="leaf_count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount"></a>

```python
leaf_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of leaf nodes in the tree-based structure. Default value is 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#leaf_count VertexAiRagCorpus#leaf_count}

---

##### `tree_depth`<sup>Optional</sup> <a name="tree_depth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth"></a>

```python
tree_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#tree_depth VertexAiRagCorpus#tree_depth}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDbKnn <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbKnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn()
```


### VertexAiRagCorpusVectorDbConfigVertexVectorSearch <a name="VertexAiRagCorpusVectorDbConfigVertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch(
  index: str,
  index_endpoint: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index">index</a></code> | <code>str</code> | The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint">index_endpoint</a></code> | <code>str</code> | The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index"></a>

```python
index: str
```

- *Type:* str

The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index VertexAiRagCorpus#index}

---

##### `index_endpoint`<sup>Required</sup> <a name="index_endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint"></a>

```python
index_endpoint: str
```

- *Type:* str

The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index_endpoint VertexAiRagCorpus#index_endpoint}

---

### VertexAiRagCorpusVertexAiSearchConfig <a name="VertexAiRagCorpusVertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig(
  serving_config: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.property.servingConfig">serving_config</a></code> | <code>str</code> | Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}. |

---

##### `serving_config`<sup>Required</sup> <a name="serving_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.property.servingConfig"></a>

```python
serving_config: str
```

- *Type:* str

Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#serving_config VertexAiRagCorpus#serving_config}

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiRagCorpusCorpusStatusList <a name="VertexAiRagCorpusCorpusStatusList" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiRagCorpusCorpusStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VertexAiRagCorpusCorpusStatusOutputReference <a name="VertexAiRagCorpusCorpusStatusOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus">error_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus">VertexAiRagCorpusCorpusStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_status`<sup>Required</sup> <a name="error_status" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus"></a>

```python
error_status: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagCorpusCorpusStatus
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus">VertexAiRagCorpusCorpusStatus</a>

---


### VertexAiRagCorpusEncryptionSpecOutputReference <a name="VertexAiRagCorpusEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagCorpusEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

---


### VertexAiRagCorpusTimeoutsOutputReference <a name="VertexAiRagCorpusTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiRagCorpusTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

---


### VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion">reset_api_key_secret_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString">reset_api_key_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_key_secret_version` <a name="reset_api_key_secret_version" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion"></a>

```python
def reset_api_key_secret_version() -> None
```

##### `reset_api_key_string` <a name="reset_api_key_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString"></a>

```python
def reset_api_key_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput">api_key_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput">api_key_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString">api_key_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_secret_version_input`<sup>Optional</sup> <a name="api_key_secret_version_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```python
api_key_secret_version_input: str
```

- *Type:* str

---

##### `api_key_string_input`<sup>Optional</sup> <a name="api_key_string_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput"></a>

```python
api_key_string_input: str
```

- *Type:* str

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

---

##### `api_key_string`<sup>Required</sup> <a name="api_key_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString"></a>

```python
api_key_string: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---


### VertexAiRagCorpusVectorDbConfigApiAuthOutputReference <a name="VertexAiRagCorpusVectorDbConfigApiAuthOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig">put_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig">reset_api_key_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_config` <a name="put_api_key_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig"></a>

```python
def put_api_key_config(
  api_key_secret_version: str = None,
  api_key_string: str = None
) -> None
```

###### `api_key_secret_version`<sup>Optional</sup> <a name="api_key_secret_version" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig.parameter.apiKeySecretVersion"></a>

- *Type:* str

The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_secret_version VertexAiRagCorpus#api_key_secret_version}

---

###### `api_key_string`<sup>Optional</sup> <a name="api_key_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig.parameter.apiKeyString"></a>

- *Type:* str

The API key string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_string VertexAiRagCorpus#api_key_string}

---

##### `reset_api_key_config` <a name="reset_api_key_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig"></a>

```python
def reset_api_key_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput">api_key_config_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a>

---

##### `api_key_config_input`<sup>Optional</sup> <a name="api_key_config_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput"></a>

```python
api_key_config_input: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagCorpusVectorDbConfigApiAuth
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

---


### VertexAiRagCorpusVectorDbConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth">put_api_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone">put_pinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig">put_rag_embedding_model_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb">put_rag_managed_db</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch">put_vertex_vector_search</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth">reset_api_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone">reset_pinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig">reset_rag_embedding_model_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb">reset_rag_managed_db</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch">reset_vertex_vector_search</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_auth` <a name="put_api_auth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth"></a>

```python
def put_api_auth(
  api_key_config: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig = None
) -> None
```

###### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth.parameter.apiKeyConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_config VertexAiRagCorpus#api_key_config}

---

##### `put_pinecone` <a name="put_pinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone"></a>

```python
def put_pinecone(
  index_name: str
) -> None
```

###### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone.parameter.indexName"></a>

- *Type:* str

Pinecone index name. This value cannot be changed after it's set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index_name VertexAiRagCorpus#index_name}

---

##### `put_rag_embedding_model_config` <a name="put_rag_embedding_model_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig"></a>

```python
def put_rag_embedding_model_config(
  vertex_prediction_endpoint: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint = None
) -> None
```

###### `vertex_prediction_endpoint`<sup>Optional</sup> <a name="vertex_prediction_endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig.parameter.vertexPredictionEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

vertex_prediction_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_prediction_endpoint VertexAiRagCorpus#vertex_prediction_endpoint}

---

##### `put_rag_managed_db` <a name="put_rag_managed_db" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb"></a>

```python
def put_rag_managed_db(
  ann: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn = None,
  knn: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn = None
) -> None
```

###### `ann`<sup>Optional</sup> <a name="ann" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb.parameter.ann"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

ann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#ann VertexAiRagCorpus#ann}

---

###### `knn`<sup>Optional</sup> <a name="knn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb.parameter.knn"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

knn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#knn VertexAiRagCorpus#knn}

---

##### `put_vertex_vector_search` <a name="put_vertex_vector_search" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch"></a>

```python
def put_vertex_vector_search(
  index: str,
  index_endpoint: str
) -> None
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch.parameter.index"></a>

- *Type:* str

The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index VertexAiRagCorpus#index}

---

###### `index_endpoint`<sup>Required</sup> <a name="index_endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch.parameter.indexEndpoint"></a>

- *Type:* str

The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index_endpoint VertexAiRagCorpus#index_endpoint}

---

##### `reset_api_auth` <a name="reset_api_auth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth"></a>

```python
def reset_api_auth() -> None
```

##### `reset_pinecone` <a name="reset_pinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone"></a>

```python
def reset_pinecone() -> None
```

##### `reset_rag_embedding_model_config` <a name="reset_rag_embedding_model_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig"></a>

```python
def reset_rag_embedding_model_config() -> None
```

##### `reset_rag_managed_db` <a name="reset_rag_managed_db" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb"></a>

```python
def reset_rag_managed_db() -> None
```

##### `reset_vertex_vector_search` <a name="reset_vertex_vector_search" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch"></a>

```python
def reset_vertex_vector_search() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth">api_auth</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone">pinecone</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference">VertexAiRagCorpusVectorDbConfigPineconeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig">rag_embedding_model_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb">rag_managed_db</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch">vertex_vector_search</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput">api_auth_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput">pinecone_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput">rag_embedding_model_config_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput">rag_managed_db_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput">vertex_vector_search_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_auth`<sup>Required</sup> <a name="api_auth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth"></a>

```python
api_auth: VertexAiRagCorpusVectorDbConfigApiAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a>

---

##### `pinecone`<sup>Required</sup> <a name="pinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone"></a>

```python
pinecone: VertexAiRagCorpusVectorDbConfigPineconeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference">VertexAiRagCorpusVectorDbConfigPineconeOutputReference</a>

---

##### `rag_embedding_model_config`<sup>Required</sup> <a name="rag_embedding_model_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig"></a>

```python
rag_embedding_model_config: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a>

---

##### `rag_managed_db`<sup>Required</sup> <a name="rag_managed_db" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb"></a>

```python
rag_managed_db: VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a>

---

##### `vertex_vector_search`<sup>Required</sup> <a name="vertex_vector_search" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch"></a>

```python
vertex_vector_search: VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a>

---

##### `api_auth_input`<sup>Optional</sup> <a name="api_auth_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput"></a>

```python
api_auth_input: VertexAiRagCorpusVectorDbConfigApiAuth
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `pinecone_input`<sup>Optional</sup> <a name="pinecone_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput"></a>

```python
pinecone_input: VertexAiRagCorpusVectorDbConfigPinecone
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `rag_embedding_model_config_input`<sup>Optional</sup> <a name="rag_embedding_model_config_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput"></a>

```python
rag_embedding_model_config_input: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `rag_managed_db_input`<sup>Optional</sup> <a name="rag_managed_db_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput"></a>

```python
rag_managed_db_input: VertexAiRagCorpusVectorDbConfigRagManagedDb
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `vertex_vector_search_input`<sup>Optional</sup> <a name="vertex_vector_search_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput"></a>

```python
vertex_vector_search_input: VertexAiRagCorpusVectorDbConfigVertexVectorSearch
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagCorpusVectorDbConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

---


### VertexAiRagCorpusVectorDbConfigPineconeOutputReference <a name="VertexAiRagCorpusVectorDbConfigPineconeOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput">index_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `index_name_input`<sup>Optional</sup> <a name="index_name_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput"></a>

```python
index_name_input: str
```

- *Type:* str

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagCorpusVectorDbConfigPinecone
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

---


### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint">put_vertex_prediction_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint">reset_vertex_prediction_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vertex_prediction_endpoint` <a name="put_vertex_prediction_endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint"></a>

```python
def put_vertex_prediction_endpoint(
  endpoint: str
) -> None
```

###### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint.parameter.endpoint"></a>

- *Type:* str

Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#endpoint VertexAiRagCorpus#endpoint}

---

##### `reset_vertex_prediction_endpoint` <a name="reset_vertex_prediction_endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint"></a>

```python
def reset_vertex_prediction_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint">vertex_prediction_endpoint</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput">vertex_prediction_endpoint_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vertex_prediction_endpoint`<sup>Required</sup> <a name="vertex_prediction_endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint"></a>

```python
vertex_prediction_endpoint: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a>

---

##### `vertex_prediction_endpoint_input`<sup>Optional</sup> <a name="vertex_prediction_endpoint_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput"></a>

```python
vertex_prediction_endpoint_input: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---


### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId">model_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `model_version_id`<sup>Required</sup> <a name="model_version_id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId"></a>

```python
model_version_id: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount">reset_leaf_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth">reset_tree_depth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_leaf_count` <a name="reset_leaf_count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount"></a>

```python
def reset_leaf_count() -> None
```

##### `reset_tree_depth` <a name="reset_tree_depth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth"></a>

```python
def reset_tree_depth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput">leaf_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput">tree_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount">leaf_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth">tree_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `leaf_count_input`<sup>Optional</sup> <a name="leaf_count_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput"></a>

```python
leaf_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tree_depth_input`<sup>Optional</sup> <a name="tree_depth_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput"></a>

```python
tree_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `leaf_count`<sup>Required</sup> <a name="leaf_count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount"></a>

```python
leaf_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tree_depth`<sup>Required</sup> <a name="tree_depth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth"></a>

```python
tree_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn">put_ann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn">put_knn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn">reset_ann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn">reset_knn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ann` <a name="put_ann" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn"></a>

```python
def put_ann(
  leaf_count: typing.Union[int, float] = None,
  tree_depth: typing.Union[int, float] = None
) -> None
```

###### `leaf_count`<sup>Optional</sup> <a name="leaf_count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn.parameter.leafCount"></a>

- *Type:* typing.Union[int, float]

Number of leaf nodes in the tree-based structure. Default value is 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#leaf_count VertexAiRagCorpus#leaf_count}

---

###### `tree_depth`<sup>Optional</sup> <a name="tree_depth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn.parameter.treeDepth"></a>

- *Type:* typing.Union[int, float]

The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#tree_depth VertexAiRagCorpus#tree_depth}

---

##### `put_knn` <a name="put_knn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn"></a>

```python
def put_knn() -> None
```

##### `reset_ann` <a name="reset_ann" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn"></a>

```python
def reset_ann() -> None
```

##### `reset_knn` <a name="reset_knn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn"></a>

```python
def reset_knn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann">ann</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn">knn</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput">ann_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput">knn_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ann`<sup>Required</sup> <a name="ann" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann"></a>

```python
ann: VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a>

---

##### `knn`<sup>Required</sup> <a name="knn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn"></a>

```python
knn: VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a>

---

##### `ann_input`<sup>Optional</sup> <a name="ann_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput"></a>

```python
ann_input: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `knn_input`<sup>Optional</sup> <a name="knn_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput"></a>

```python
knn_input: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagCorpusVectorDbConfigRagManagedDb
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---


### VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference <a name="VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput">index_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput">index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index">index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint">index_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `index_endpoint_input`<sup>Optional</sup> <a name="index_endpoint_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput"></a>

```python
index_endpoint_input: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput"></a>

```python
index_input: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index"></a>

```python
index: str
```

- *Type:* str

---

##### `index_endpoint`<sup>Required</sup> <a name="index_endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint"></a>

```python
index_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagCorpusVectorDbConfigVertexVectorSearch
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---


### VertexAiRagCorpusVertexAiSearchConfigOutputReference <a name="VertexAiRagCorpusVertexAiSearchConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_corpus

vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput">serving_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig">serving_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `serving_config_input`<sup>Optional</sup> <a name="serving_config_input" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput"></a>

```python
serving_config_input: str
```

- *Type:* str

---

##### `serving_config`<sup>Required</sup> <a name="serving_config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig"></a>

```python
serving_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagCorpusVertexAiSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

---



