# `vertexAiIndexEndpoint` Submodule <a name="`vertexAiIndexEndpoint` Submodule" id="@cdktn/provider-google.vertexAiIndexEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiIndexEndpoint <a name="VertexAiIndexEndpoint" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint google_vertex_ai_index_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpoint;

VertexAiIndexEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .encryptionSpec(VertexAiIndexEndpointEncryptionSpec)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .privateServiceConnectConfig(VertexAiIndexEndpointPrivateServiceConnectConfig)
//  .project(java.lang.String)
//  .publicEndpointEnabled(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .timeouts(VertexAiIndexEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Index. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the Index. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#id VertexAiIndexEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#project VertexAiIndexEndpoint#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.publicEndpointEnabled">publicEndpointEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the deployed index will be accessible through public endpoint. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the index endpoint. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#display_name VertexAiIndexEndpoint#display_name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#deletion_policy VertexAiIndexEndpoint#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#description VertexAiIndexEndpoint#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#encryption_spec VertexAiIndexEndpoint#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#id VertexAiIndexEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your Indexes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#labels VertexAiIndexEndpoint#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#network VertexAiIndexEndpoint#network}

---

##### `privateServiceConnectConfig`<sup>Optional</sup> <a name="privateServiceConnectConfig" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.privateServiceConnectConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#private_service_connect_config VertexAiIndexEndpoint#private_service_connect_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#project VertexAiIndexEndpoint#project}.

---

##### `publicEndpointEnabled`<sup>Optional</sup> <a name="publicEndpointEnabled" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.publicEndpointEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the deployed index will be accessible through public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#public_endpoint_enabled VertexAiIndexEndpoint#public_endpoint_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the index endpoint. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#region VertexAiIndexEndpoint#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#timeouts VertexAiIndexEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putPrivateServiceConnectConfig">putPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetPrivateServiceConnectConfig">resetPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetPublicEndpointEnabled">resetPublicEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(VertexAiIndexEndpointEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a>

---

##### `putPrivateServiceConnectConfig` <a name="putPrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putPrivateServiceConnectConfig"></a>

```java
public void putPrivateServiceConnectConfig(VertexAiIndexEndpointPrivateServiceConnectConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putTimeouts"></a>

```java
public void putTimeouts(VertexAiIndexEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetPrivateServiceConnectConfig` <a name="resetPrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetPrivateServiceConnectConfig"></a>

```java
public void resetPrivateServiceConnectConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetProject"></a>

```java
public void resetProject()
```

##### `resetPublicEndpointEnabled` <a name="resetPublicEndpointEnabled" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetPublicEndpointEnabled"></a>

```java
public void resetPublicEndpointEnabled()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiIndexEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpoint;

VertexAiIndexEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpoint;

VertexAiIndexEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpoint;

VertexAiIndexEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpoint;

VertexAiIndexEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VertexAiIndexEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VertexAiIndexEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VertexAiIndexEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VertexAiIndexEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiIndexEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference">VertexAiIndexEndpointEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference">VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointDomainName">publicEndpointDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference">VertexAiIndexEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.privateServiceConnectConfigInput">privateServiceConnectConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointEnabledInput">publicEndpointEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointEnabled">publicEndpointEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.encryptionSpec"></a>

```java
public VertexAiIndexEndpointEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference">VertexAiIndexEndpointEncryptionSpecOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateServiceConnectConfig`<sup>Required</sup> <a name="privateServiceConnectConfig" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.privateServiceConnectConfig"></a>

```java
public VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference getPrivateServiceConnectConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference">VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference</a>

---

##### `publicEndpointDomainName`<sup>Required</sup> <a name="publicEndpointDomainName" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointDomainName"></a>

```java
public java.lang.String getPublicEndpointDomainName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.timeouts"></a>

```java
public VertexAiIndexEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference">VertexAiIndexEndpointTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.encryptionSpecInput"></a>

```java
public VertexAiIndexEndpointEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `privateServiceConnectConfigInput`<sup>Optional</sup> <a name="privateServiceConnectConfigInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.privateServiceConnectConfigInput"></a>

```java
public VertexAiIndexEndpointPrivateServiceConnectConfig getPrivateServiceConnectConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `publicEndpointEnabledInput`<sup>Optional</sup> <a name="publicEndpointEnabledInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPublicEndpointEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.timeoutsInput"></a>

```java
public IResolvable|VertexAiIndexEndpointTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `publicEndpointEnabled`<sup>Required</sup> <a name="publicEndpointEnabled" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.publicEndpointEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublicEndpointEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiIndexEndpointConfig <a name="VertexAiIndexEndpointConfig" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpointConfig;

VertexAiIndexEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .encryptionSpec(VertexAiIndexEndpointEncryptionSpec)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .privateServiceConnectConfig(VertexAiIndexEndpointPrivateServiceConnectConfig)
//  .project(java.lang.String)
//  .publicEndpointEnabled(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .timeouts(VertexAiIndexEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Index. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Index. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#id VertexAiIndexEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.network">network</a></code> | <code>java.lang.String</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#project VertexAiIndexEndpoint#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.publicEndpointEnabled">publicEndpointEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the deployed index will be accessible through public endpoint. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the index endpoint. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#display_name VertexAiIndexEndpoint#display_name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#deletion_policy VertexAiIndexEndpoint#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#description VertexAiIndexEndpoint#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.encryptionSpec"></a>

```java
public VertexAiIndexEndpointEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#encryption_spec VertexAiIndexEndpoint#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#id VertexAiIndexEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your Indexes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#labels VertexAiIndexEndpoint#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#network VertexAiIndexEndpoint#network}

---

##### `privateServiceConnectConfig`<sup>Optional</sup> <a name="privateServiceConnectConfig" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.privateServiceConnectConfig"></a>

```java
public VertexAiIndexEndpointPrivateServiceConnectConfig getPrivateServiceConnectConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#private_service_connect_config VertexAiIndexEndpoint#private_service_connect_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#project VertexAiIndexEndpoint#project}.

---

##### `publicEndpointEnabled`<sup>Optional</sup> <a name="publicEndpointEnabled" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.publicEndpointEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublicEndpointEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the deployed index will be accessible through public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#public_endpoint_enabled VertexAiIndexEndpoint#public_endpoint_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the index endpoint. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#region VertexAiIndexEndpoint#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointConfig.property.timeouts"></a>

```java
public VertexAiIndexEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#timeouts VertexAiIndexEndpoint#timeouts}

---

### VertexAiIndexEndpointEncryptionSpec <a name="VertexAiIndexEndpointEncryptionSpec" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpointEncryptionSpec;

VertexAiIndexEndpointEncryptionSpec.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Required. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Required.

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#kms_key_name VertexAiIndexEndpoint#kms_key_name}

---

### VertexAiIndexEndpointPrivateServiceConnectConfig <a name="VertexAiIndexEndpointPrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpointPrivateServiceConnectConfig;

VertexAiIndexEndpointPrivateServiceConnectConfig.builder()
    .enablePrivateServiceConnect(java.lang.Boolean|IResolvable)
//  .projectAllowlist(java.util.List<java.lang.String>)
//  .pscAutomationConfigs(IResolvable|java.util.List<VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect">enablePrivateServiceConnect</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, the IndexEndpoint is created without private service access. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.projectAllowlist">projectAllowlist</a></code> | <code>java.util.List<java.lang.String></code> | A list of Projects from which the forwarding rule will target the service attachment. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.pscAutomationConfigs">pscAutomationConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>></code> | psc_automation_configs block. |

---

##### `enablePrivateServiceConnect`<sup>Required</sup> <a name="enablePrivateServiceConnect" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrivateServiceConnect();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, the IndexEndpoint is created without private service access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#enable_private_service_connect VertexAiIndexEndpoint#enable_private_service_connect}

---

##### `projectAllowlist`<sup>Optional</sup> <a name="projectAllowlist" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.projectAllowlist"></a>

```java
public java.util.List<java.lang.String> getProjectAllowlist();
```

- *Type:* java.util.List<java.lang.String>

A list of Projects from which the forwarding rule will target the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#project_allowlist VertexAiIndexEndpoint#project_allowlist}

---

##### `pscAutomationConfigs`<sup>Optional</sup> <a name="pscAutomationConfigs" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig.property.pscAutomationConfigs"></a>

```java
public IResolvable|java.util.List<VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs> getPscAutomationConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>>

psc_automation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#psc_automation_configs VertexAiIndexEndpoint#psc_automation_configs}

---

### VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs <a name="VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs;

VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.builder()
    .network(java.lang.String)
    .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.network">network</a></code> | <code>java.lang.String</code> | The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/get): projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Project id used to create forwarding rule. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/get): projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#network VertexAiIndexEndpoint#network}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Project id used to create forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#project_id VertexAiIndexEndpoint#project_id}

---

### VertexAiIndexEndpointTimeouts <a name="VertexAiIndexEndpointTimeouts" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpointTimeouts;

VertexAiIndexEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#create VertexAiIndexEndpoint#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#delete VertexAiIndexEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#update VertexAiIndexEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#create VertexAiIndexEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#delete VertexAiIndexEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_index_endpoint#update VertexAiIndexEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiIndexEndpointEncryptionSpecOutputReference <a name="VertexAiIndexEndpointEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpointEncryptionSpecOutputReference;

new VertexAiIndexEndpointEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpecOutputReference.property.internalValue"></a>

```java
public VertexAiIndexEndpointEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointEncryptionSpec">VertexAiIndexEndpointEncryptionSpec</a>

---


### VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference <a name="VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference;

new VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.putPscAutomationConfigs">putPscAutomationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist">resetProjectAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetPscAutomationConfigs">resetPscAutomationConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPscAutomationConfigs` <a name="putPscAutomationConfigs" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.putPscAutomationConfigs"></a>

```java
public void putPscAutomationConfigs(IResolvable|java.util.List<VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.putPscAutomationConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>>

---

##### `resetProjectAllowlist` <a name="resetProjectAllowlist" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist"></a>

```java
public void resetProjectAllowlist()
```

##### `resetPscAutomationConfigs` <a name="resetPscAutomationConfigs" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetPscAutomationConfigs"></a>

```java
public void resetPscAutomationConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigs">pscAutomationConfigs</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput">enablePrivateServiceConnectInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput">projectAllowlistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigsInput">pscAutomationConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect">enablePrivateServiceConnect</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist">projectAllowlist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pscAutomationConfigs`<sup>Required</sup> <a name="pscAutomationConfigs" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigs"></a>

```java
public VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList getPscAutomationConfigs();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList</a>

---

##### `enablePrivateServiceConnectInput`<sup>Optional</sup> <a name="enablePrivateServiceConnectInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrivateServiceConnectInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectAllowlistInput`<sup>Optional</sup> <a name="projectAllowlistInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput"></a>

```java
public java.util.List<java.lang.String> getProjectAllowlistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pscAutomationConfigsInput`<sup>Optional</sup> <a name="pscAutomationConfigsInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigsInput"></a>

```java
public IResolvable|java.util.List<VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs> getPscAutomationConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>>

---

##### `enablePrivateServiceConnect`<sup>Required</sup> <a name="enablePrivateServiceConnect" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrivateServiceConnect();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectAllowlist`<sup>Required</sup> <a name="projectAllowlist" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist"></a>

```java
public java.util.List<java.lang.String> getProjectAllowlist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```java
public VertexAiIndexEndpointPrivateServiceConnectConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfig">VertexAiIndexEndpointPrivateServiceConnectConfig</a>

---


### VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList <a name="VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList;

new VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.get"></a>

```java
public VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>>

---


### VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference <a name="VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference;

new VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>

---


### VertexAiIndexEndpointTimeoutsOutputReference <a name="VertexAiIndexEndpointTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_index_endpoint.VertexAiIndexEndpointTimeoutsOutputReference;

new VertexAiIndexEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiIndexEndpointTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiIndexEndpoint.VertexAiIndexEndpointTimeouts">VertexAiIndexEndpointTimeouts</a>

---



