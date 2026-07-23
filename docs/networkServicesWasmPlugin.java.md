# `networkServicesWasmPlugin` Submodule <a name="`networkServicesWasmPlugin` Submodule" id="@cdktn/provider-google.networkServicesWasmPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesWasmPlugin <a name="NetworkServicesWasmPlugin" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin google_network_services_wasm_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPlugin;

NetworkServicesWasmPlugin.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mainVersionId(java.lang.String)
    .name(java.lang.String)
    .versions(IResolvable|java.util.List<NetworkServicesWasmPluginVersions>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .logConfig(NetworkServicesWasmPluginLogConfig)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesWasmPluginTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.mainVersionId">mainVersionId</a></code> | <code>java.lang.String</code> | The ID of the WasmPluginVersion resource that is the currently serving one. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Identifier. Name of the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.versions">versions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>></code> | versions block. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#id NetworkServicesWasmPlugin#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the traffic extension. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#project NetworkServicesWasmPlugin#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mainVersionId`<sup>Required</sup> <a name="mainVersionId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.mainVersionId"></a>

- *Type:* java.lang.String

The ID of the WasmPluginVersion resource that is the currently serving one.

The version referred to must be a child of this WasmPlugin resource and should be listed in the "versions" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#main_version_id NetworkServicesWasmPlugin#main_version_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Identifier. Name of the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#name NetworkServicesWasmPlugin#name}

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.versions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>>

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#versions NetworkServicesWasmPlugin#versions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#deletion_policy NetworkServicesWasmPlugin#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#description NetworkServicesWasmPlugin#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#id NetworkServicesWasmPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Set of labels associated with the WasmPlugin resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#labels NetworkServicesWasmPlugin#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#location NetworkServicesWasmPlugin#location}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#log_config NetworkServicesWasmPlugin#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#project NetworkServicesWasmPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#timeouts NetworkServicesWasmPlugin#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putVersions">putVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putLogConfig"></a>

```java
public void putLogConfig(NetworkServicesWasmPluginLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putTimeouts"></a>

```java
public void putTimeouts(NetworkServicesWasmPluginTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

---

##### `putVersions` <a name="putVersions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putVersions"></a>

```java
public void putVersions(IResolvable|java.util.List<NetworkServicesWasmPluginVersions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putVersions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isConstruct"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPlugin;

NetworkServicesWasmPlugin.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformElement"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPlugin;

NetworkServicesWasmPlugin.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformResource"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPlugin;

NetworkServicesWasmPlugin.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPlugin;

NetworkServicesWasmPlugin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkServicesWasmPlugin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkServicesWasmPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkServicesWasmPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesWasmPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference">NetworkServicesWasmPluginLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference">NetworkServicesWasmPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.usedBy">usedBy</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList">NetworkServicesWasmPluginUsedByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versions">versions</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList">NetworkServicesWasmPluginVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionIdInput">mainVersionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versionsInput">versionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionId">mainVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfig"></a>

```java
public NetworkServicesWasmPluginLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference">NetworkServicesWasmPluginLogConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeouts"></a>

```java
public NetworkServicesWasmPluginTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference">NetworkServicesWasmPluginTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `usedBy`<sup>Required</sup> <a name="usedBy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.usedBy"></a>

```java
public NetworkServicesWasmPluginUsedByList getUsedBy();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList">NetworkServicesWasmPluginUsedByList</a>

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versions"></a>

```java
public NetworkServicesWasmPluginVersionsList getVersions();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList">NetworkServicesWasmPluginVersionsList</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfigInput"></a>

```java
public NetworkServicesWasmPluginLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

---

##### `mainVersionIdInput`<sup>Optional</sup> <a name="mainVersionIdInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionIdInput"></a>

```java
public java.lang.String getMainVersionIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeoutsInput"></a>

```java
public IResolvable|NetworkServicesWasmPluginTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

---

##### `versionsInput`<sup>Optional</sup> <a name="versionsInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versionsInput"></a>

```java
public IResolvable|java.util.List<NetworkServicesWasmPluginVersions> getVersionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mainVersionId`<sup>Required</sup> <a name="mainVersionId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionId"></a>

```java
public java.lang.String getMainVersionId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesWasmPluginConfig <a name="NetworkServicesWasmPluginConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPluginConfig;

NetworkServicesWasmPluginConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mainVersionId(java.lang.String)
    .name(java.lang.String)
    .versions(IResolvable|java.util.List<NetworkServicesWasmPluginVersions>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .logConfig(NetworkServicesWasmPluginLogConfig)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesWasmPluginTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.mainVersionId">mainVersionId</a></code> | <code>java.lang.String</code> | The ID of the WasmPluginVersion resource that is the currently serving one. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.name">name</a></code> | <code>java.lang.String</code> | Identifier. Name of the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.versions">versions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>></code> | versions block. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#id NetworkServicesWasmPlugin#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the traffic extension. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#project NetworkServicesWasmPlugin#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mainVersionId`<sup>Required</sup> <a name="mainVersionId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.mainVersionId"></a>

```java
public java.lang.String getMainVersionId();
```

- *Type:* java.lang.String

The ID of the WasmPluginVersion resource that is the currently serving one.

The version referred to must be a child of this WasmPlugin resource and should be listed in the "versions" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#main_version_id NetworkServicesWasmPlugin#main_version_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifier. Name of the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#name NetworkServicesWasmPlugin#name}

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.versions"></a>

```java
public IResolvable|java.util.List<NetworkServicesWasmPluginVersions> getVersions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>>

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#versions NetworkServicesWasmPlugin#versions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#deletion_policy NetworkServicesWasmPlugin#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#description NetworkServicesWasmPlugin#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#id NetworkServicesWasmPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Set of labels associated with the WasmPlugin resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#labels NetworkServicesWasmPlugin#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#location NetworkServicesWasmPlugin#location}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.logConfig"></a>

```java
public NetworkServicesWasmPluginLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#log_config NetworkServicesWasmPlugin#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#project NetworkServicesWasmPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.timeouts"></a>

```java
public NetworkServicesWasmPluginTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#timeouts NetworkServicesWasmPlugin#timeouts}

---

### NetworkServicesWasmPluginLogConfig <a name="NetworkServicesWasmPluginLogConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPluginLogConfig;

NetworkServicesWasmPluginLogConfig.builder()
//  .enable(java.lang.Boolean|IResolvable)
//  .minLogLevel(java.lang.String)
//  .sampleRate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional. Specifies whether to enable logging for activity by this plugin. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.minLogLevel">minLogLevel</a></code> | <code>java.lang.String</code> | Non-empty default. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | Non-empty default. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional. Specifies whether to enable logging for activity by this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#enable NetworkServicesWasmPlugin#enable}

---

##### `minLogLevel`<sup>Optional</sup> <a name="minLogLevel" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.minLogLevel"></a>

```java
public java.lang.String getMinLogLevel();
```

- *Type:* java.lang.String

Non-empty default.

Specificies the lowest level of the plugin logs that are exported to Cloud Logging. This setting relates to the logs generated by using logging statements in your Wasm code.
This field is can be set only if logging is enabled for the plugin.
If the field is not provided when logging is enabled, it is set to INFO by default. Possible values: ["LOG_LEVEL_UNSPECIFIED", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "CRITICAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#min_log_level NetworkServicesWasmPlugin#min_log_level}

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

Non-empty default.

Configures the sampling rate of activity logs, where 1.0 means all logged activity is reported and 0.0 means no activity is reported.
A floating point value between 0.0 and 1.0 indicates that a percentage of log messages is stored.
The default value when logging is enabled is 1.0. The value of the field must be between 0 and 1 (inclusive).
This field can be specified only if logging is enabled for this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#sample_rate NetworkServicesWasmPlugin#sample_rate}

---

### NetworkServicesWasmPluginTimeouts <a name="NetworkServicesWasmPluginTimeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPluginTimeouts;

NetworkServicesWasmPluginTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#create NetworkServicesWasmPlugin#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#delete NetworkServicesWasmPlugin#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#update NetworkServicesWasmPlugin#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#create NetworkServicesWasmPlugin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#delete NetworkServicesWasmPlugin#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#update NetworkServicesWasmPlugin#update}.

---

### NetworkServicesWasmPluginUsedBy <a name="NetworkServicesWasmPluginUsedBy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPluginUsedBy;

NetworkServicesWasmPluginUsedBy.builder()
    .build();
```


### NetworkServicesWasmPluginVersions <a name="NetworkServicesWasmPluginVersions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPluginVersions;

NetworkServicesWasmPluginVersions.builder()
    .versionName(java.lang.String)
//  .description(java.lang.String)
//  .imageUri(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .pluginConfigData(java.lang.String)
//  .pluginConfigUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.versionName">versionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#version_name NetworkServicesWasmPlugin#version_name}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.description">description</a></code> | <code>java.lang.String</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigData">pluginConfigData</a></code> | <code>java.lang.String</code> | A base64-encoded string containing the configuration for the plugin. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigUri">pluginConfigUri</a></code> | <code>java.lang.String</code> | URI of the plugin configuration stored in the Artifact Registry. |

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#version_name NetworkServicesWasmPlugin#version_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#description NetworkServicesWasmPlugin#description}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

Optional.

URI of the container image containing the plugin, stored in the Artifact Registry. When a new WasmPluginVersion resource is created, the digest of the container image is saved in the imageDigest field.
When downloading an image, the digest value is used instead of an image tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#image_uri NetworkServicesWasmPlugin#image_uri}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Set of labels associated with the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#labels NetworkServicesWasmPlugin#labels}

---

##### `pluginConfigData`<sup>Optional</sup> <a name="pluginConfigData" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigData"></a>

```java
public java.lang.String getPluginConfigData();
```

- *Type:* java.lang.String

A base64-encoded string containing the configuration for the plugin.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
When a new WasmPluginVersion resource is created, the digest of the contents is saved in the pluginConfigDigest field.
Conflics with pluginConfigUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#plugin_config_data NetworkServicesWasmPlugin#plugin_config_data}

---

##### `pluginConfigUri`<sup>Optional</sup> <a name="pluginConfigUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigUri"></a>

```java
public java.lang.String getPluginConfigUri();
```

- *Type:* java.lang.String

URI of the plugin configuration stored in the Artifact Registry.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
The container image must contain only a single file with the name plugin.config.
When a new WasmPluginVersion resource is created, the digest of the container image is saved in the pluginConfigDigest field.
Conflics with pluginConfigData.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_wasm_plugin#plugin_config_uri NetworkServicesWasmPlugin#plugin_config_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesWasmPluginLogConfigOutputReference <a name="NetworkServicesWasmPluginLogConfigOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPluginLogConfigOutputReference;

new NetworkServicesWasmPluginLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel">resetMinLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate">resetSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetMinLogLevel` <a name="resetMinLogLevel" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel"></a>

```java
public void resetMinLogLevel()
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate"></a>

```java
public void resetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput">minLogLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel">minLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enableInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `minLogLevelInput`<sup>Optional</sup> <a name="minLogLevelInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput"></a>

```java
public java.lang.String getMinLogLevelInput();
```

- *Type:* java.lang.String

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput"></a>

```java
public java.lang.Number getSampleRateInput();
```

- *Type:* java.lang.Number

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `minLogLevel`<sup>Required</sup> <a name="minLogLevel" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel"></a>

```java
public java.lang.String getMinLogLevel();
```

- *Type:* java.lang.String

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.internalValue"></a>

```java
public NetworkServicesWasmPluginLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

---


### NetworkServicesWasmPluginTimeoutsOutputReference <a name="NetworkServicesWasmPluginTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPluginTimeoutsOutputReference;

new NetworkServicesWasmPluginTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkServicesWasmPluginTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

---


### NetworkServicesWasmPluginUsedByList <a name="NetworkServicesWasmPluginUsedByList" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPluginUsedByList;

new NetworkServicesWasmPluginUsedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.get"></a>

```java
public NetworkServicesWasmPluginUsedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkServicesWasmPluginUsedByOutputReference <a name="NetworkServicesWasmPluginUsedByOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPluginUsedByOutputReference;

new NetworkServicesWasmPluginUsedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy">NetworkServicesWasmPluginUsedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.internalValue"></a>

```java
public NetworkServicesWasmPluginUsedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy">NetworkServicesWasmPluginUsedBy</a>

---


### NetworkServicesWasmPluginVersionsList <a name="NetworkServicesWasmPluginVersionsList" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPluginVersionsList;

new NetworkServicesWasmPluginVersionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.get"></a>

```java
public NetworkServicesWasmPluginVersionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkServicesWasmPluginVersions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>>

---


### NetworkServicesWasmPluginVersionsOutputReference <a name="NetworkServicesWasmPluginVersionsOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_wasm_plugin.NetworkServicesWasmPluginVersionsOutputReference;

new NetworkServicesWasmPluginVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData">resetPluginConfigData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri">resetPluginConfigUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetImageUri"></a>

```java
public void resetImageUri()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPluginConfigData` <a name="resetPluginConfigData" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData"></a>

```java
public void resetPluginConfigData()
```

##### `resetPluginConfigUri` <a name="resetPluginConfigUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri"></a>

```java
public void resetPluginConfigUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest">pluginConfigDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput">pluginConfigDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput">pluginConfigUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput">versionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData">pluginConfigData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri">pluginConfigUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

---

##### `pluginConfigDigest`<sup>Required</sup> <a name="pluginConfigDigest" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest"></a>

```java
public java.lang.String getPluginConfigDigest();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pluginConfigDataInput`<sup>Optional</sup> <a name="pluginConfigDataInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput"></a>

```java
public java.lang.String getPluginConfigDataInput();
```

- *Type:* java.lang.String

---

##### `pluginConfigUriInput`<sup>Optional</sup> <a name="pluginConfigUriInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput"></a>

```java
public java.lang.String getPluginConfigUriInput();
```

- *Type:* java.lang.String

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput"></a>

```java
public java.lang.String getVersionNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pluginConfigData`<sup>Required</sup> <a name="pluginConfigData" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData"></a>

```java
public java.lang.String getPluginConfigData();
```

- *Type:* java.lang.String

---

##### `pluginConfigUri`<sup>Required</sup> <a name="pluginConfigUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri"></a>

```java
public java.lang.String getPluginConfigUri();
```

- *Type:* java.lang.String

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkServicesWasmPluginVersions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>

---



