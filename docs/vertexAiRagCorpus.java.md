# `vertexAiRagCorpus` Submodule <a name="`vertexAiRagCorpus` Submodule" id="@cdktn/provider-google.vertexAiRagCorpus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiRagCorpus <a name="VertexAiRagCorpus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus google_vertex_ai_rag_corpus}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpus;

VertexAiRagCorpus.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .region(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .encryptionSpec(VertexAiRagCorpusEncryptionSpec)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(VertexAiRagCorpusTimeouts)
//  .vectorDbConfig(VertexAiRagCorpusVectorDbConfig)
//  .vertexAiSearchConfig(VertexAiRagCorpusVertexAiSearchConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. The description of the RagCorpus. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.vectorDbConfig">vectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | vector_db_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.vertexAiSearchConfig">vertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | vertex_ai_search_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required.

The display name of the RagCorpus. The name can be up to 128
characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#display_name VertexAiRagCorpus#display_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#region VertexAiRagCorpus#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

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

- *Type:* java.lang.String

Optional. The description of the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#description VertexAiRagCorpus#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#encryption_spec VertexAiRagCorpus#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#timeouts VertexAiRagCorpus#timeouts}

---

##### `vectorDbConfig`<sup>Optional</sup> <a name="vectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.vectorDbConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

vector_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vector_db_config VertexAiRagCorpus#vector_db_config}

---

##### `vertexAiSearchConfig`<sup>Optional</sup> <a name="vertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.vertexAiSearchConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

vertex_ai_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_ai_search_config VertexAiRagCorpus#vertex_ai_search_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig">putVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig">putVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVectorDbConfig">resetVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVertexAiSearchConfig">resetVertexAiSearchConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(VertexAiRagCorpusEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts"></a>

```java
public void putTimeouts(VertexAiRagCorpusTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

---

##### `putVectorDbConfig` <a name="putVectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig"></a>

```java
public void putVectorDbConfig(VertexAiRagCorpusVectorDbConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

---

##### `putVertexAiSearchConfig` <a name="putVertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig"></a>

```java
public void putVertexAiSearchConfig(VertexAiRagCorpusVertexAiSearchConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVectorDbConfig` <a name="resetVectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVectorDbConfig"></a>

```java
public void resetVectorDbConfig()
```

##### `resetVertexAiSearchConfig` <a name="resetVertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVertexAiSearchConfig"></a>

```java
public void resetVertexAiSearchConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiRagCorpus resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isConstruct"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpus;

VertexAiRagCorpus.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpus;

VertexAiRagCorpus.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpus;

VertexAiRagCorpus.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpus;

VertexAiRagCorpus.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VertexAiRagCorpus.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VertexAiRagCorpus resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VertexAiRagCorpus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VertexAiRagCorpus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiRagCorpus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.corpusStatus">corpusStatus</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList">VertexAiRagCorpusCorpusStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference">VertexAiRagCorpusEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference">VertexAiRagCorpusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfig">vectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference">VertexAiRagCorpusVectorDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfig">vertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference">VertexAiRagCorpusVertexAiSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfigInput">vectorDbConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfigInput">vertexAiSearchConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `corpusStatus`<sup>Required</sup> <a name="corpusStatus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.corpusStatus"></a>

```java
public VertexAiRagCorpusCorpusStatusList getCorpusStatus();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList">VertexAiRagCorpusCorpusStatusList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpec"></a>

```java
public VertexAiRagCorpusEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference">VertexAiRagCorpusEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeouts"></a>

```java
public VertexAiRagCorpusTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference">VertexAiRagCorpusTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `vectorDbConfig`<sup>Required</sup> <a name="vectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfig"></a>

```java
public VertexAiRagCorpusVectorDbConfigOutputReference getVectorDbConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference">VertexAiRagCorpusVectorDbConfigOutputReference</a>

---

##### `vertexAiSearchConfig`<sup>Required</sup> <a name="vertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfig"></a>

```java
public VertexAiRagCorpusVertexAiSearchConfigOutputReference getVertexAiSearchConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference">VertexAiRagCorpusVertexAiSearchConfigOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpecInput"></a>

```java
public VertexAiRagCorpusEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeoutsInput"></a>

```java
public IResolvable|VertexAiRagCorpusTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

---

##### `vectorDbConfigInput`<sup>Optional</sup> <a name="vectorDbConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfigInput"></a>

```java
public VertexAiRagCorpusVectorDbConfig getVectorDbConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

---

##### `vertexAiSearchConfigInput`<sup>Optional</sup> <a name="vertexAiSearchConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfigInput"></a>

```java
public VertexAiRagCorpusVertexAiSearchConfig getVertexAiSearchConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiRagCorpusConfig <a name="VertexAiRagCorpusConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusConfig;

VertexAiRagCorpusConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .region(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .encryptionSpec(VertexAiRagCorpusEncryptionSpec)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(VertexAiRagCorpusTimeouts)
//  .vectorDbConfig(VertexAiRagCorpusVectorDbConfig)
//  .vertexAiSearchConfig(VertexAiRagCorpusVertexAiSearchConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. The description of the RagCorpus. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vectorDbConfig">vectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | vector_db_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vertexAiSearchConfig">vertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | vertex_ai_search_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required.

The display name of the RagCorpus. The name can be up to 128
characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#display_name VertexAiRagCorpus#display_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#region VertexAiRagCorpus#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

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

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. The description of the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#description VertexAiRagCorpus#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.encryptionSpec"></a>

```java
public VertexAiRagCorpusEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#encryption_spec VertexAiRagCorpus#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.timeouts"></a>

```java
public VertexAiRagCorpusTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#timeouts VertexAiRagCorpus#timeouts}

---

##### `vectorDbConfig`<sup>Optional</sup> <a name="vectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vectorDbConfig"></a>

```java
public VertexAiRagCorpusVectorDbConfig getVectorDbConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

vector_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vector_db_config VertexAiRagCorpus#vector_db_config}

---

##### `vertexAiSearchConfig`<sup>Optional</sup> <a name="vertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vertexAiSearchConfig"></a>

```java
public VertexAiRagCorpusVertexAiSearchConfig getVertexAiSearchConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

vertex_ai_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_ai_search_config VertexAiRagCorpus#vertex_ai_search_config}

---

### VertexAiRagCorpusCorpusStatus <a name="VertexAiRagCorpusCorpusStatus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusCorpusStatus;

VertexAiRagCorpusCorpusStatus.builder()
    .build();
```


### VertexAiRagCorpusEncryptionSpec <a name="VertexAiRagCorpusEncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusEncryptionSpec;

VertexAiRagCorpusEncryptionSpec.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Required. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

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

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusTimeouts;

VertexAiRagCorpusTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#create VertexAiRagCorpus#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#delete VertexAiRagCorpus#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#update VertexAiRagCorpus#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#create VertexAiRagCorpus#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#delete VertexAiRagCorpus#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#update VertexAiRagCorpus#update}.

---

### VertexAiRagCorpusVectorDbConfig <a name="VertexAiRagCorpusVectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfig;

VertexAiRagCorpusVectorDbConfig.builder()
//  .apiAuth(VertexAiRagCorpusVectorDbConfigApiAuth)
//  .pinecone(VertexAiRagCorpusVectorDbConfigPinecone)
//  .ragEmbeddingModelConfig(VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig)
//  .ragManagedDb(VertexAiRagCorpusVectorDbConfigRagManagedDb)
//  .vertexVectorSearch(VertexAiRagCorpusVectorDbConfigVertexVectorSearch)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.apiAuth">apiAuth</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | api_auth block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.pinecone">pinecone</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | pinecone block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig">ragEmbeddingModelConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | rag_embedding_model_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragManagedDb">ragManagedDb</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | rag_managed_db block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch">vertexVectorSearch</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | vertex_vector_search block. |

---

##### `apiAuth`<sup>Optional</sup> <a name="apiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.apiAuth"></a>

```java
public VertexAiRagCorpusVectorDbConfigApiAuth getApiAuth();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

api_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_auth VertexAiRagCorpus#api_auth}

---

##### `pinecone`<sup>Optional</sup> <a name="pinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.pinecone"></a>

```java
public VertexAiRagCorpusVectorDbConfigPinecone getPinecone();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

pinecone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#pinecone VertexAiRagCorpus#pinecone}

---

##### `ragEmbeddingModelConfig`<sup>Optional</sup> <a name="ragEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig getRagEmbeddingModelConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

rag_embedding_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#rag_embedding_model_config VertexAiRagCorpus#rag_embedding_model_config}

---

##### `ragManagedDb`<sup>Optional</sup> <a name="ragManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragManagedDb"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagManagedDb getRagManagedDb();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

rag_managed_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#rag_managed_db VertexAiRagCorpus#rag_managed_db}

---

##### `vertexVectorSearch`<sup>Optional</sup> <a name="vertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch"></a>

```java
public VertexAiRagCorpusVectorDbConfigVertexVectorSearch getVertexVectorSearch();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

vertex_vector_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_vector_search VertexAiRagCorpus#vertex_vector_search}

---

### VertexAiRagCorpusVectorDbConfigApiAuth <a name="VertexAiRagCorpusVectorDbConfigApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigApiAuth;

VertexAiRagCorpusVectorDbConfigApiAuth.builder()
//  .apiKeyConfig(VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | api_key_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig"></a>

```java
public VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig getApiKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_config VertexAiRagCorpus#api_key_config}

---

### VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig <a name="VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig;

VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.builder()
//  .apiKeySecretVersion(java.lang.String)
//  .apiKeyString(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>java.lang.String</code> | The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString">apiKeyString</a></code> | <code>java.lang.String</code> | The API key string. |

---

##### `apiKeySecretVersion`<sup>Optional</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion"></a>

```java
public java.lang.String getApiKeySecretVersion();
```

- *Type:* java.lang.String

The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_secret_version VertexAiRagCorpus#api_key_secret_version}

---

##### `apiKeyString`<sup>Optional</sup> <a name="apiKeyString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString"></a>

```java
public java.lang.String getApiKeyString();
```

- *Type:* java.lang.String

The API key string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_string VertexAiRagCorpus#api_key_string}

---

### VertexAiRagCorpusVectorDbConfigPinecone <a name="VertexAiRagCorpusVectorDbConfigPinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigPinecone;

VertexAiRagCorpusVectorDbConfigPinecone.builder()
    .indexName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.property.indexName">indexName</a></code> | <code>java.lang.String</code> | Pinecone index name. This value cannot be changed after it's set. |

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

Pinecone index name. This value cannot be changed after it's set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index_name VertexAiRagCorpus#index_name}

---

### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig;

VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.builder()
//  .vertexPredictionEndpoint(VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint">vertexPredictionEndpoint</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | vertex_prediction_endpoint block. |

---

##### `vertexPredictionEndpoint`<sup>Optional</sup> <a name="vertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint getVertexPredictionEndpoint();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

vertex_prediction_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_prediction_endpoint VertexAiRagCorpus#vertex_prediction_endpoint}

---

### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint;

VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.builder()
    .endpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#endpoint VertexAiRagCorpus#endpoint}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDb <a name="VertexAiRagCorpusVectorDbConfigRagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigRagManagedDb;

VertexAiRagCorpusVectorDbConfigRagManagedDb.builder()
//  .ann(VertexAiRagCorpusVectorDbConfigRagManagedDbAnn)
//  .knn(VertexAiRagCorpusVectorDbConfigRagManagedDbKnn)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann">ann</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | ann block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn">knn</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | knn block. |

---

##### `ann`<sup>Optional</sup> <a name="ann" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagManagedDbAnn getAnn();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

ann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#ann VertexAiRagCorpus#ann}

---

##### `knn`<sup>Optional</sup> <a name="knn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagManagedDbKnn getKnn();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

knn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#knn VertexAiRagCorpus#knn}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDbAnn <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbAnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn;

VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.builder()
//  .leafCount(java.lang.Number)
//  .treeDepth(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount">leafCount</a></code> | <code>java.lang.Number</code> | Number of leaf nodes in the tree-based structure. Default value is 500. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth">treeDepth</a></code> | <code>java.lang.Number</code> | The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2. |

---

##### `leafCount`<sup>Optional</sup> <a name="leafCount" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount"></a>

```java
public java.lang.Number getLeafCount();
```

- *Type:* java.lang.Number

Number of leaf nodes in the tree-based structure. Default value is 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#leaf_count VertexAiRagCorpus#leaf_count}

---

##### `treeDepth`<sup>Optional</sup> <a name="treeDepth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth"></a>

```java
public java.lang.Number getTreeDepth();
```

- *Type:* java.lang.Number

The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#tree_depth VertexAiRagCorpus#tree_depth}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDbKnn <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbKnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn;

VertexAiRagCorpusVectorDbConfigRagManagedDbKnn.builder()
    .build();
```


### VertexAiRagCorpusVectorDbConfigVertexVectorSearch <a name="VertexAiRagCorpusVectorDbConfigVertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch;

VertexAiRagCorpusVectorDbConfigVertexVectorSearch.builder()
    .index(java.lang.String)
    .indexEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index">index</a></code> | <code>java.lang.String</code> | The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint">indexEndpoint</a></code> | <code>java.lang.String</code> | The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index VertexAiRagCorpus#index}

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint"></a>

```java
public java.lang.String getIndexEndpoint();
```

- *Type:* java.lang.String

The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index_endpoint VertexAiRagCorpus#index_endpoint}

---

### VertexAiRagCorpusVertexAiSearchConfig <a name="VertexAiRagCorpusVertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVertexAiSearchConfig;

VertexAiRagCorpusVertexAiSearchConfig.builder()
    .servingConfig(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.property.servingConfig">servingConfig</a></code> | <code>java.lang.String</code> | Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}. |

---

##### `servingConfig`<sup>Required</sup> <a name="servingConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.property.servingConfig"></a>

```java
public java.lang.String getServingConfig();
```

- *Type:* java.lang.String

Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#serving_config VertexAiRagCorpus#serving_config}

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiRagCorpusCorpusStatusList <a name="VertexAiRagCorpusCorpusStatusList" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusCorpusStatusList;

new VertexAiRagCorpusCorpusStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get"></a>

```java
public VertexAiRagCorpusCorpusStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VertexAiRagCorpusCorpusStatusOutputReference <a name="VertexAiRagCorpusCorpusStatusOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusCorpusStatusOutputReference;

new VertexAiRagCorpusCorpusStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus">errorStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus">VertexAiRagCorpusCorpusStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorStatus`<sup>Required</sup> <a name="errorStatus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus"></a>

```java
public java.lang.String getErrorStatus();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.internalValue"></a>

```java
public VertexAiRagCorpusCorpusStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus">VertexAiRagCorpusCorpusStatus</a>

---


### VertexAiRagCorpusEncryptionSpecOutputReference <a name="VertexAiRagCorpusEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusEncryptionSpecOutputReference;

new VertexAiRagCorpusEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue"></a>

```java
public VertexAiRagCorpusEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

---


### VertexAiRagCorpusTimeoutsOutputReference <a name="VertexAiRagCorpusTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusTimeoutsOutputReference;

new VertexAiRagCorpusTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiRagCorpusTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

---


### VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference;

new VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion">resetApiKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString">resetApiKeyString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKeySecretVersion` <a name="resetApiKeySecretVersion" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion"></a>

```java
public void resetApiKeySecretVersion()
```

##### `resetApiKeyString` <a name="resetApiKeyString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString"></a>

```java
public void resetApiKeyString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput">apiKeySecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput">apiKeyStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString">apiKeyString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeySecretVersionInput`<sup>Optional</sup> <a name="apiKeySecretVersionInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```java
public java.lang.String getApiKeySecretVersionInput();
```

- *Type:* java.lang.String

---

##### `apiKeyStringInput`<sup>Optional</sup> <a name="apiKeyStringInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput"></a>

```java
public java.lang.String getApiKeyStringInput();
```

- *Type:* java.lang.String

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```java
public java.lang.String getApiKeySecretVersion();
```

- *Type:* java.lang.String

---

##### `apiKeyString`<sup>Required</sup> <a name="apiKeyString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString"></a>

```java
public java.lang.String getApiKeyString();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue"></a>

```java
public VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---


### VertexAiRagCorpusVectorDbConfigApiAuthOutputReference <a name="VertexAiRagCorpusVectorDbConfigApiAuthOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference;

new VertexAiRagCorpusVectorDbConfigApiAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig"></a>

```java
public void putApiKeyConfig(VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig"></a>

```java
public void resetApiKeyConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig"></a>

```java
public VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference getApiKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput"></a>

```java
public VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig getApiKeyConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue"></a>

```java
public VertexAiRagCorpusVectorDbConfigApiAuth getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

---


### VertexAiRagCorpusVectorDbConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigOutputReference;

new VertexAiRagCorpusVectorDbConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth">putApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone">putPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig">putRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb">putRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch">putVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth">resetApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone">resetPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig">resetRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb">resetRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch">resetVertexVectorSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiAuth` <a name="putApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth"></a>

```java
public void putApiAuth(VertexAiRagCorpusVectorDbConfigApiAuth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `putPinecone` <a name="putPinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone"></a>

```java
public void putPinecone(VertexAiRagCorpusVectorDbConfigPinecone value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `putRagEmbeddingModelConfig` <a name="putRagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig"></a>

```java
public void putRagEmbeddingModelConfig(VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `putRagManagedDb` <a name="putRagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb"></a>

```java
public void putRagManagedDb(VertexAiRagCorpusVectorDbConfigRagManagedDb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `putVertexVectorSearch` <a name="putVertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch"></a>

```java
public void putVertexVectorSearch(VertexAiRagCorpusVectorDbConfigVertexVectorSearch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `resetApiAuth` <a name="resetApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth"></a>

```java
public void resetApiAuth()
```

##### `resetPinecone` <a name="resetPinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone"></a>

```java
public void resetPinecone()
```

##### `resetRagEmbeddingModelConfig` <a name="resetRagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig"></a>

```java
public void resetRagEmbeddingModelConfig()
```

##### `resetRagManagedDb` <a name="resetRagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb"></a>

```java
public void resetRagManagedDb()
```

##### `resetVertexVectorSearch` <a name="resetVertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch"></a>

```java
public void resetVertexVectorSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth">apiAuth</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone">pinecone</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference">VertexAiRagCorpusVectorDbConfigPineconeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig">ragEmbeddingModelConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb">ragManagedDb</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch">vertexVectorSearch</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput">apiAuthInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput">pineconeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput">ragEmbeddingModelConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput">ragManagedDbInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput">vertexVectorSearchInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiAuth`<sup>Required</sup> <a name="apiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth"></a>

```java
public VertexAiRagCorpusVectorDbConfigApiAuthOutputReference getApiAuth();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a>

---

##### `pinecone`<sup>Required</sup> <a name="pinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone"></a>

```java
public VertexAiRagCorpusVectorDbConfigPineconeOutputReference getPinecone();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference">VertexAiRagCorpusVectorDbConfigPineconeOutputReference</a>

---

##### `ragEmbeddingModelConfig`<sup>Required</sup> <a name="ragEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference getRagEmbeddingModelConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a>

---

##### `ragManagedDb`<sup>Required</sup> <a name="ragManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference getRagManagedDb();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a>

---

##### `vertexVectorSearch`<sup>Required</sup> <a name="vertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch"></a>

```java
public VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference getVertexVectorSearch();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a>

---

##### `apiAuthInput`<sup>Optional</sup> <a name="apiAuthInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput"></a>

```java
public VertexAiRagCorpusVectorDbConfigApiAuth getApiAuthInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `pineconeInput`<sup>Optional</sup> <a name="pineconeInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput"></a>

```java
public VertexAiRagCorpusVectorDbConfigPinecone getPineconeInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `ragEmbeddingModelConfigInput`<sup>Optional</sup> <a name="ragEmbeddingModelConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig getRagEmbeddingModelConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `ragManagedDbInput`<sup>Optional</sup> <a name="ragManagedDbInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagManagedDb getRagManagedDbInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `vertexVectorSearchInput`<sup>Optional</sup> <a name="vertexVectorSearchInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput"></a>

```java
public VertexAiRagCorpusVectorDbConfigVertexVectorSearch getVertexVectorSearchInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue"></a>

```java
public VertexAiRagCorpusVectorDbConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

---


### VertexAiRagCorpusVectorDbConfigPineconeOutputReference <a name="VertexAiRagCorpusVectorDbConfigPineconeOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference;

new VertexAiRagCorpusVectorDbConfigPineconeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName">indexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput"></a>

```java
public java.lang.String getIndexNameInput();
```

- *Type:* java.lang.String

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue"></a>

```java
public VertexAiRagCorpusVectorDbConfigPinecone getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

---


### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference;

new VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint">putVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint">resetVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVertexPredictionEndpoint` <a name="putVertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint"></a>

```java
public void putVertexPredictionEndpoint(VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `resetVertexPredictionEndpoint` <a name="resetVertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint"></a>

```java
public void resetVertexPredictionEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint">vertexPredictionEndpoint</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput">vertexPredictionEndpointInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vertexPredictionEndpoint`<sup>Required</sup> <a name="vertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference getVertexPredictionEndpoint();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a>

---

##### `vertexPredictionEndpointInput`<sup>Optional</sup> <a name="vertexPredictionEndpointInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint getVertexPredictionEndpointInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---


### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference;

new VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId">modelVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `modelVersionId`<sup>Required</sup> <a name="modelVersionId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId"></a>

```java
public java.lang.String getModelVersionId();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference;

new VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount">resetLeafCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth">resetTreeDepth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLeafCount` <a name="resetLeafCount" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount"></a>

```java
public void resetLeafCount()
```

##### `resetTreeDepth` <a name="resetTreeDepth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth"></a>

```java
public void resetTreeDepth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput">leafCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput">treeDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount">leafCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth">treeDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `leafCountInput`<sup>Optional</sup> <a name="leafCountInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput"></a>

```java
public java.lang.Number getLeafCountInput();
```

- *Type:* java.lang.Number

---

##### `treeDepthInput`<sup>Optional</sup> <a name="treeDepthInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput"></a>

```java
public java.lang.Number getTreeDepthInput();
```

- *Type:* java.lang.Number

---

##### `leafCount`<sup>Required</sup> <a name="leafCount" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount"></a>

```java
public java.lang.Number getLeafCount();
```

- *Type:* java.lang.Number

---

##### `treeDepth`<sup>Required</sup> <a name="treeDepth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth"></a>

```java
public java.lang.Number getTreeDepth();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagManagedDbAnn getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference;

new VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagManagedDbKnn getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference;

new VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn">putAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn">putKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn">resetAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn">resetKnn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnn` <a name="putAnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn"></a>

```java
public void putAnn(VertexAiRagCorpusVectorDbConfigRagManagedDbAnn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `putKnn` <a name="putKnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn"></a>

```java
public void putKnn(VertexAiRagCorpusVectorDbConfigRagManagedDbKnn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `resetAnn` <a name="resetAnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn"></a>

```java
public void resetAnn()
```

##### `resetKnn` <a name="resetKnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn"></a>

```java
public void resetKnn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann">ann</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn">knn</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput">annInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput">knnInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ann`<sup>Required</sup> <a name="ann" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference getAnn();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a>

---

##### `knn`<sup>Required</sup> <a name="knn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference getKnn();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a>

---

##### `annInput`<sup>Optional</sup> <a name="annInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagManagedDbAnn getAnnInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `knnInput`<sup>Optional</sup> <a name="knnInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagManagedDbKnn getKnnInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue"></a>

```java
public VertexAiRagCorpusVectorDbConfigRagManagedDb getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---


### VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference <a name="VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference;

new VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput">indexEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput">indexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index">index</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint">indexEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indexEndpointInput`<sup>Optional</sup> <a name="indexEndpointInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput"></a>

```java
public java.lang.String getIndexEndpointInput();
```

- *Type:* java.lang.String

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput"></a>

```java
public java.lang.String getIndexInput();
```

- *Type:* java.lang.String

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint"></a>

```java
public java.lang.String getIndexEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue"></a>

```java
public VertexAiRagCorpusVectorDbConfigVertexVectorSearch getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---


### VertexAiRagCorpusVertexAiSearchConfigOutputReference <a name="VertexAiRagCorpusVertexAiSearchConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_rag_corpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference;

new VertexAiRagCorpusVertexAiSearchConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput">servingConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig">servingConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `servingConfigInput`<sup>Optional</sup> <a name="servingConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput"></a>

```java
public java.lang.String getServingConfigInput();
```

- *Type:* java.lang.String

---

##### `servingConfig`<sup>Required</sup> <a name="servingConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig"></a>

```java
public java.lang.String getServingConfig();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue"></a>

```java
public VertexAiRagCorpusVertexAiSearchConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

---



