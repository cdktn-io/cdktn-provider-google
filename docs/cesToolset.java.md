# `cesToolset` Submodule <a name="`cesToolset` Submodule" id="@cdktn/provider-google.cesToolset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesToolset <a name="CesToolset" id="@cdktn/provider-google.cesToolset.CesToolset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset google_ces_toolset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolset;

CesToolset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .location(java.lang.String)
    .toolsetId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .executionType(java.lang.String)
//  .id(java.lang.String)
//  .mcpToolset(CesToolsetMcpToolset)
//  .openApiToolset(CesToolsetOpenApiToolset)
//  .project(java.lang.String)
//  .timeouts(CesToolsetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.toolsetId">toolsetId</a></code> | <code>java.lang.String</code> | The ID to use for the toolset, which will become the final component of the toolset's resource name. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the toolset. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the toolset. Must be unique within the same app. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.executionType">executionType</a></code> | <code>java.lang.String</code> | Possible values: SYNCHRONOUS ASYNCHRONOUS. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#id CesToolset#id}. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.mcpToolset">mcpToolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a></code> | mcp_toolset block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.openApiToolset">openApiToolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a></code> | open_api_toolset block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#project CesToolset#project}. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.app"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#app CesToolset#app}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#location CesToolset#location}

---

##### `toolsetId`<sup>Required</sup> <a name="toolsetId" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.toolsetId"></a>

- *Type:* java.lang.String

The ID to use for the toolset, which will become the final component of the toolset's resource name.

If not provided, a unique ID will be
automatically assigned for the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#toolset_id CesToolset#toolset_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#deletion_policy CesToolset#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#description CesToolset#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the toolset. Must be unique within the same app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#display_name CesToolset#display_name}

---

##### `executionType`<sup>Optional</sup> <a name="executionType" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.executionType"></a>

- *Type:* java.lang.String

Possible values: SYNCHRONOUS ASYNCHRONOUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#execution_type CesToolset#execution_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#id CesToolset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcpToolset`<sup>Optional</sup> <a name="mcpToolset" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.mcpToolset"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a>

mcp_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#mcp_toolset CesToolset#mcp_toolset}

---

##### `openApiToolset`<sup>Optional</sup> <a name="openApiToolset" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.openApiToolset"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a>

open_api_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#open_api_toolset CesToolset#open_api_toolset}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#project CesToolset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesToolset.CesToolset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#timeouts CesToolset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.putMcpToolset">putMcpToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.putOpenApiToolset">putOpenApiToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetExecutionType">resetExecutionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetMcpToolset">resetMcpToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetOpenApiToolset">resetOpenApiToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesToolset.CesToolset.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesToolset.CesToolset.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cesToolset.CesToolset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesToolset.CesToolset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cesToolset.CesToolset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cesToolset.CesToolset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cesToolset.CesToolset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cesToolset.CesToolset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cesToolset.CesToolset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cesToolset.CesToolset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cesToolset.CesToolset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesToolset.CesToolset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cesToolset.CesToolset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cesToolset.CesToolset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesToolset.CesToolset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesToolset.CesToolset.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cesToolset.CesToolset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesToolset.CesToolset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cesToolset.CesToolset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesToolset.CesToolset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesToolset.CesToolset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cesToolset.CesToolset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesToolset.CesToolset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMcpToolset` <a name="putMcpToolset" id="@cdktn/provider-google.cesToolset.CesToolset.putMcpToolset"></a>

```java
public void putMcpToolset(CesToolsetMcpToolset value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolset.putMcpToolset.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a>

---

##### `putOpenApiToolset` <a name="putOpenApiToolset" id="@cdktn/provider-google.cesToolset.CesToolset.putOpenApiToolset"></a>

```java
public void putOpenApiToolset(CesToolsetOpenApiToolset value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolset.putOpenApiToolset.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cesToolset.CesToolset.putTimeouts"></a>

```java
public void putTimeouts(CesToolsetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cesToolset.CesToolset.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesToolset.CesToolset.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.cesToolset.CesToolset.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExecutionType` <a name="resetExecutionType" id="@cdktn/provider-google.cesToolset.CesToolset.resetExecutionType"></a>

```java
public void resetExecutionType()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cesToolset.CesToolset.resetId"></a>

```java
public void resetId()
```

##### `resetMcpToolset` <a name="resetMcpToolset" id="@cdktn/provider-google.cesToolset.CesToolset.resetMcpToolset"></a>

```java
public void resetMcpToolset()
```

##### `resetOpenApiToolset` <a name="resetOpenApiToolset" id="@cdktn/provider-google.cesToolset.CesToolset.resetOpenApiToolset"></a>

```java
public void resetOpenApiToolset()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.cesToolset.CesToolset.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cesToolset.CesToolset.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CesToolset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cesToolset.CesToolset.isConstruct"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolset;

CesToolset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesToolset.CesToolset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cesToolset.CesToolset.isTerraformElement"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolset;

CesToolset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesToolset.CesToolset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cesToolset.CesToolset.isTerraformResource"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolset;

CesToolset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesToolset.CesToolset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cesToolset.CesToolset.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolset;

CesToolset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CesToolset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CesToolset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesToolset.CesToolset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cesToolset.CesToolset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CesToolset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cesToolset.CesToolset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CesToolset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesToolset.CesToolset.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CesToolset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.mcpToolset">mcpToolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference">CesToolsetMcpToolsetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.openApiToolset">openApiToolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference">CesToolsetOpenApiToolsetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference">CesToolsetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.appInput">appInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.executionTypeInput">executionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.mcpToolsetInput">mcpToolsetInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.openApiToolsetInput">openApiToolsetInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.toolsetIdInput">toolsetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.app">app</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.executionType">executionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.toolsetId">toolsetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesToolset.CesToolset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cesToolset.CesToolset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cesToolset.CesToolset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cesToolset.CesToolset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cesToolset.CesToolset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cesToolset.CesToolset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesToolset.CesToolset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesToolset.CesToolset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesToolset.CesToolset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesToolset.CesToolset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesToolset.CesToolset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesToolset.CesToolset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesToolset.CesToolset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cesToolset.CesToolset.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesToolset.CesToolset.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `mcpToolset`<sup>Required</sup> <a name="mcpToolset" id="@cdktn/provider-google.cesToolset.CesToolset.property.mcpToolset"></a>

```java
public CesToolsetMcpToolsetOutputReference getMcpToolset();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference">CesToolsetMcpToolsetOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesToolset.CesToolset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `openApiToolset`<sup>Required</sup> <a name="openApiToolset" id="@cdktn/provider-google.cesToolset.CesToolset.property.openApiToolset"></a>

```java
public CesToolsetOpenApiToolsetOutputReference getOpenApiToolset();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference">CesToolsetOpenApiToolsetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesToolset.CesToolset.property.timeouts"></a>

```java
public CesToolsetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference">CesToolsetTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.cesToolset.CesToolset.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google.cesToolset.CesToolset.property.appInput"></a>

```java
public java.lang.String getAppInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cesToolset.CesToolset.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesToolset.CesToolset.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cesToolset.CesToolset.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `executionTypeInput`<sup>Optional</sup> <a name="executionTypeInput" id="@cdktn/provider-google.cesToolset.CesToolset.property.executionTypeInput"></a>

```java
public java.lang.String getExecutionTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cesToolset.CesToolset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.cesToolset.CesToolset.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mcpToolsetInput`<sup>Optional</sup> <a name="mcpToolsetInput" id="@cdktn/provider-google.cesToolset.CesToolset.property.mcpToolsetInput"></a>

```java
public CesToolsetMcpToolset getMcpToolsetInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a>

---

##### `openApiToolsetInput`<sup>Optional</sup> <a name="openApiToolsetInput" id="@cdktn/provider-google.cesToolset.CesToolset.property.openApiToolsetInput"></a>

```java
public CesToolsetOpenApiToolset getOpenApiToolsetInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.cesToolset.CesToolset.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cesToolset.CesToolset.property.timeoutsInput"></a>

```java
public IResolvable|CesToolsetTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a>

---

##### `toolsetIdInput`<sup>Optional</sup> <a name="toolsetIdInput" id="@cdktn/provider-google.cesToolset.CesToolset.property.toolsetIdInput"></a>

```java
public java.lang.String getToolsetIdInput();
```

- *Type:* java.lang.String

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesToolset.CesToolset.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesToolset.CesToolset.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesToolset.CesToolset.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesToolset.CesToolset.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `executionType`<sup>Required</sup> <a name="executionType" id="@cdktn/provider-google.cesToolset.CesToolset.property.executionType"></a>

```java
public java.lang.String getExecutionType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesToolset.CesToolset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesToolset.CesToolset.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesToolset.CesToolset.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `toolsetId`<sup>Required</sup> <a name="toolsetId" id="@cdktn/provider-google.cesToolset.CesToolset.property.toolsetId"></a>

```java
public java.lang.String getToolsetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesToolset.CesToolset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CesToolsetConfig <a name="CesToolsetConfig" id="@cdktn/provider-google.cesToolset.CesToolsetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetConfig;

CesToolsetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .location(java.lang.String)
    .toolsetId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .executionType(java.lang.String)
//  .id(java.lang.String)
//  .mcpToolset(CesToolsetMcpToolset)
//  .openApiToolset(CesToolsetOpenApiToolset)
//  .project(java.lang.String)
//  .timeouts(CesToolsetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.toolsetId">toolsetId</a></code> | <code>java.lang.String</code> | The ID to use for the toolset, which will become the final component of the toolset's resource name. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the toolset. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the toolset. Must be unique within the same app. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.executionType">executionType</a></code> | <code>java.lang.String</code> | Possible values: SYNCHRONOUS ASYNCHRONOUS. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#id CesToolset#id}. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.mcpToolset">mcpToolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a></code> | mcp_toolset block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.openApiToolset">openApiToolset</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a></code> | open_api_toolset block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#project CesToolset#project}. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#app CesToolset#app}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#location CesToolset#location}

---

##### `toolsetId`<sup>Required</sup> <a name="toolsetId" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.toolsetId"></a>

```java
public java.lang.String getToolsetId();
```

- *Type:* java.lang.String

The ID to use for the toolset, which will become the final component of the toolset's resource name.

If not provided, a unique ID will be
automatically assigned for the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#toolset_id CesToolset#toolset_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#deletion_policy CesToolset#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#description CesToolset#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the toolset. Must be unique within the same app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#display_name CesToolset#display_name}

---

##### `executionType`<sup>Optional</sup> <a name="executionType" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.executionType"></a>

```java
public java.lang.String getExecutionType();
```

- *Type:* java.lang.String

Possible values: SYNCHRONOUS ASYNCHRONOUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#execution_type CesToolset#execution_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#id CesToolset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcpToolset`<sup>Optional</sup> <a name="mcpToolset" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.mcpToolset"></a>

```java
public CesToolsetMcpToolset getMcpToolset();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a>

mcp_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#mcp_toolset CesToolset#mcp_toolset}

---

##### `openApiToolset`<sup>Optional</sup> <a name="openApiToolset" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.openApiToolset"></a>

```java
public CesToolsetOpenApiToolset getOpenApiToolset();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a>

open_api_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#open_api_toolset CesToolset#open_api_toolset}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#project CesToolset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesToolset.CesToolsetConfig.property.timeouts"></a>

```java
public CesToolsetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#timeouts CesToolset#timeouts}

---

### CesToolsetMcpToolset <a name="CesToolsetMcpToolset" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolset;

CesToolsetMcpToolset.builder()
    .serverAddress(java.lang.String)
//  .apiAuthentication(CesToolsetMcpToolsetApiAuthentication)
//  .customHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .serviceDirectoryConfig(CesToolsetMcpToolsetServiceDirectoryConfig)
//  .tlsConfig(CesToolsetMcpToolsetTlsConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.serverAddress">serverAddress</a></code> | <code>java.lang.String</code> | The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication">CesToolsetMcpToolsetApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.customHeaders">customHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The custom headers to send in the request to the MCP server. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig">CesToolsetMcpToolsetServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig">CesToolsetMcpToolsetTlsConfig</a></code> | tls_config block. |

---

##### `serverAddress`<sup>Required</sup> <a name="serverAddress" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.serverAddress"></a>

```java
public java.lang.String getServerAddress();
```

- *Type:* java.lang.String

The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#server_address CesToolset#server_address}

---

##### `apiAuthentication`<sup>Optional</sup> <a name="apiAuthentication" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.apiAuthentication"></a>

```java
public CesToolsetMcpToolsetApiAuthentication getApiAuthentication();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication">CesToolsetMcpToolsetApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#api_authentication CesToolset#api_authentication}

---

##### `customHeaders`<sup>Optional</sup> <a name="customHeaders" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.customHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The custom headers to send in the request to the MCP server.

The values
must be in the format '$context.variables.<name_of_variable>' and can be
set in the session variables. See
https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection
for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#custom_headers CesToolset#custom_headers}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.serviceDirectoryConfig"></a>

```java
public CesToolsetMcpToolsetServiceDirectoryConfig getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig">CesToolsetMcpToolsetServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#service_directory_config CesToolset#service_directory_config}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolset.property.tlsConfig"></a>

```java
public CesToolsetMcpToolsetTlsConfig getTlsConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig">CesToolsetMcpToolsetTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#tls_config CesToolset#tls_config}

---

### CesToolsetMcpToolsetApiAuthentication <a name="CesToolsetMcpToolsetApiAuthentication" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetApiAuthentication;

CesToolsetMcpToolsetApiAuthentication.builder()
//  .apiKeyConfig(CesToolsetMcpToolsetApiAuthenticationApiKeyConfig)
//  .bearerTokenConfig(CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig)
//  .oauthConfig(CesToolsetMcpToolsetApiAuthenticationOauthConfig)
//  .serviceAccountAuthConfig(CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig)
//  .serviceAgentIdTokenAuthConfig(CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig">CesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig">CesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig">serviceAgentIdTokenAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | service_agent_id_token_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.apiKeyConfig"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationApiKeyConfig getApiKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig">CesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#api_key_config CesToolset#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.bearerTokenConfig"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig getBearerTokenConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#bearer_token_config CesToolset#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.oauthConfig"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationOauthConfig getOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig">CesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#oauth_config CesToolset#oauth_config}

---

##### `serviceAccountAuthConfig`<sup>Optional</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.serviceAccountAuthConfig"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig getServiceAccountAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#service_account_auth_config CesToolset#service_account_auth_config}

---

##### `serviceAgentIdTokenAuthConfig`<sup>Optional</sup> <a name="serviceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig getServiceAgentIdTokenAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

service_agent_id_token_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#service_agent_id_token_auth_config CesToolset#service_agent_id_token_auth_config}

---

### CesToolsetMcpToolsetApiAuthenticationApiKeyConfig <a name="CesToolsetMcpToolsetApiAuthenticationApiKeyConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig;

CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.builder()
    .apiKeySecretVersion(java.lang.String)
    .keyName(java.lang.String)
    .requestLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>java.lang.String</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>java.lang.String</code> | Key location in the request. |

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```java
public java.lang.String getApiKeySecretVersion();
```

- *Type:* java.lang.String

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#api_key_secret_version CesToolset#api_key_secret_version}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#key_name CesToolset#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```java
public java.lang.String getRequestLocation();
```

- *Type:* java.lang.String

Key location in the request.

For API key auth on MCP toolsets,
the API key can only be sent in the request header.
Possible values:
HEADER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#request_location CesToolset#request_location}

---

### CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig <a name="CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig;

CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.builder()
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#token CesToolset#token}. |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#token CesToolset#token}.

---

### CesToolsetMcpToolsetApiAuthenticationOauthConfig <a name="CesToolsetMcpToolsetApiAuthenticationOauthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig;

CesToolsetMcpToolsetApiAuthenticationOauthConfig.builder()
    .clientId(java.lang.String)
    .clientSecretVersion(java.lang.String)
    .oauthGrantType(java.lang.String)
    .tokenEndpoint(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientSecretVersion">clientSecretVersion</a></code> | <code>java.lang.String</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>java.lang.String</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The OAuth scopes to grant. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#client_id CesToolset#client_id}

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```java
public java.lang.String getClientSecretVersion();
```

- *Type:* java.lang.String

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#client_secret_version CesToolset#client_secret_version}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```java
public java.lang.String getOauthGrantType();
```

- *Type:* java.lang.String

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#oauth_grant_type CesToolset#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#token_endpoint CesToolset#token_endpoint}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#scopes CesToolset#scopes}

---

### CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig <a name="CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig;

CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.builder()
    .serviceAccount(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#service_account CesToolset#service_account}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#scopes CesToolset#scopes}

---

### CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig <a name="CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig;

CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig.builder()
    .build();
```


### CesToolsetMcpToolsetServiceDirectoryConfig <a name="CesToolsetMcpToolsetServiceDirectoryConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetServiceDirectoryConfig;

CesToolsetMcpToolsetServiceDirectoryConfig.builder()
    .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig.property.service">service</a></code> | <code>java.lang.String</code> | The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#service CesToolset#service}

---

### CesToolsetMcpToolsetTlsConfig <a name="CesToolsetMcpToolsetTlsConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetTlsConfig;

CesToolsetMcpToolsetTlsConfig.builder()
    .caCerts(IResolvable|java.util.List<CesToolsetMcpToolsetTlsConfigCaCerts>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig.property.caCerts">caCerts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>></code> | ca_certs block. |

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig.property.caCerts"></a>

```java
public IResolvable|java.util.List<CesToolsetMcpToolsetTlsConfigCaCerts> getCaCerts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>>

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#ca_certs CesToolset#ca_certs}

---

### CesToolsetMcpToolsetTlsConfigCaCerts <a name="CesToolsetMcpToolsetTlsConfigCaCerts" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetTlsConfigCaCerts;

CesToolsetMcpToolsetTlsConfigCaCerts.builder()
    .cert(java.lang.String)
    .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts.property.cert">cert</a></code> | <code>java.lang.String</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, CES will use Google's default trust
store to verify certificates. N.B. Make sure the HTTPS server
certificates are signed with "subject alt name". For instance a
certificate can be self-signed using the following command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#cert CesToolset#cert}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#display_name CesToolset#display_name}

---

### CesToolsetOpenApiToolset <a name="CesToolsetOpenApiToolset" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolset;

CesToolsetOpenApiToolset.builder()
    .openApiSchema(java.lang.String)
//  .apiAuthentication(CesToolsetOpenApiToolsetApiAuthentication)
//  .ignoreUnknownFields(java.lang.Boolean|IResolvable)
//  .serviceDirectoryConfig(CesToolsetOpenApiToolsetServiceDirectoryConfig)
//  .tlsConfig(CesToolsetOpenApiToolsetTlsConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.openApiSchema">openApiSchema</a></code> | <code>java.lang.String</code> | The OpenAPI schema of the toolset. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication">CesToolsetOpenApiToolsetApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.ignoreUnknownFields">ignoreUnknownFields</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig">CesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig">CesToolsetOpenApiToolsetTlsConfig</a></code> | tls_config block. |

---

##### `openApiSchema`<sup>Required</sup> <a name="openApiSchema" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.openApiSchema"></a>

```java
public java.lang.String getOpenApiSchema();
```

- *Type:* java.lang.String

The OpenAPI schema of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#open_api_schema CesToolset#open_api_schema}

---

##### `apiAuthentication`<sup>Optional</sup> <a name="apiAuthentication" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.apiAuthentication"></a>

```java
public CesToolsetOpenApiToolsetApiAuthentication getApiAuthentication();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication">CesToolsetOpenApiToolsetApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#api_authentication CesToolset#api_authentication}

---

##### `ignoreUnknownFields`<sup>Optional</sup> <a name="ignoreUnknownFields" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.ignoreUnknownFields"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreUnknownFields();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#ignore_unknown_fields CesToolset#ignore_unknown_fields}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.serviceDirectoryConfig"></a>

```java
public CesToolsetOpenApiToolsetServiceDirectoryConfig getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig">CesToolsetOpenApiToolsetServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#service_directory_config CesToolset#service_directory_config}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset.property.tlsConfig"></a>

```java
public CesToolsetOpenApiToolsetTlsConfig getTlsConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig">CesToolsetOpenApiToolsetTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#tls_config CesToolset#tls_config}

---

### CesToolsetOpenApiToolsetApiAuthentication <a name="CesToolsetOpenApiToolsetApiAuthentication" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetApiAuthentication;

CesToolsetOpenApiToolsetApiAuthentication.builder()
//  .apiKeyConfig(CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig)
//  .bearerTokenConfig(CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig)
//  .oauthConfig(CesToolsetOpenApiToolsetApiAuthenticationOauthConfig)
//  .serviceAccountAuthConfig(CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig)
//  .serviceAgentIdTokenAuthConfig(CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig">CesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig">serviceAgentIdTokenAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | service_agent_id_token_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.apiKeyConfig"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig getApiKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#api_key_config CesToolset#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.bearerTokenConfig"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig getBearerTokenConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#bearer_token_config CesToolset#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.oauthConfig"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationOauthConfig getOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig">CesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#oauth_config CesToolset#oauth_config}

---

##### `serviceAccountAuthConfig`<sup>Optional</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.serviceAccountAuthConfig"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig getServiceAccountAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#service_account_auth_config CesToolset#service_account_auth_config}

---

##### `serviceAgentIdTokenAuthConfig`<sup>Optional</sup> <a name="serviceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig getServiceAgentIdTokenAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

service_agent_id_token_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#service_agent_id_token_auth_config CesToolset#service_agent_id_token_auth_config}

---

### CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig <a name="CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig;

CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.builder()
    .apiKeySecretVersion(java.lang.String)
    .keyName(java.lang.String)
    .requestLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>java.lang.String</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>java.lang.String</code> | Key location in the request. Possible values: HEADER QUERY_STRING. |

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```java
public java.lang.String getApiKeySecretVersion();
```

- *Type:* java.lang.String

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#api_key_secret_version CesToolset#api_key_secret_version}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#key_name CesToolset#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```java
public java.lang.String getRequestLocation();
```

- *Type:* java.lang.String

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#request_location CesToolset#request_location}

---

### CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig <a name="CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig;

CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.builder()
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#token CesToolset#token}. |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#token CesToolset#token}.

---

### CesToolsetOpenApiToolsetApiAuthenticationOauthConfig <a name="CesToolsetOpenApiToolsetApiAuthenticationOauthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig;

CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.builder()
    .clientId(java.lang.String)
    .clientSecretVersion(java.lang.String)
    .oauthGrantType(java.lang.String)
    .tokenEndpoint(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientSecretVersion">clientSecretVersion</a></code> | <code>java.lang.String</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>java.lang.String</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The OAuth scopes to grant. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#client_id CesToolset#client_id}

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```java
public java.lang.String getClientSecretVersion();
```

- *Type:* java.lang.String

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#client_secret_version CesToolset#client_secret_version}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```java
public java.lang.String getOauthGrantType();
```

- *Type:* java.lang.String

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#oauth_grant_type CesToolset#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#token_endpoint CesToolset#token_endpoint}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#scopes CesToolset#scopes}

---

### CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig <a name="CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig;

CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.builder()
    .serviceAccount(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#service_account CesToolset#service_account}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#scopes CesToolset#scopes}

---

### CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig <a name="CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig;

CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig.builder()
    .build();
```


### CesToolsetOpenApiToolsetServiceDirectoryConfig <a name="CesToolsetOpenApiToolsetServiceDirectoryConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetServiceDirectoryConfig;

CesToolsetOpenApiToolsetServiceDirectoryConfig.builder()
    .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig.property.service">service</a></code> | <code>java.lang.String</code> | The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#service CesToolset#service}

---

### CesToolsetOpenApiToolsetTlsConfig <a name="CesToolsetOpenApiToolsetTlsConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetTlsConfig;

CesToolsetOpenApiToolsetTlsConfig.builder()
    .caCerts(IResolvable|java.util.List<CesToolsetOpenApiToolsetTlsConfigCaCerts>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig.property.caCerts">caCerts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>></code> | ca_certs block. |

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig.property.caCerts"></a>

```java
public IResolvable|java.util.List<CesToolsetOpenApiToolsetTlsConfigCaCerts> getCaCerts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>>

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#ca_certs CesToolset#ca_certs}

---

### CesToolsetOpenApiToolsetTlsConfigCaCerts <a name="CesToolsetOpenApiToolsetTlsConfigCaCerts" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetTlsConfigCaCerts;

CesToolsetOpenApiToolsetTlsConfigCaCerts.builder()
    .cert(java.lang.String)
    .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts.property.cert">cert</a></code> | <code>java.lang.String</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, CES will use Google's default trust
store to verify certificates. N.B. Make sure the HTTPS server
certificates are signed with "subject alt name". For instance a
certificate can be self-signed using the following command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#cert CesToolset#cert}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#display_name CesToolset#display_name}

---

### CesToolsetTimeouts <a name="CesToolsetTimeouts" id="@cdktn/provider-google.cesToolset.CesToolsetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesToolset.CesToolsetTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetTimeouts;

CesToolsetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#create CesToolset#create}. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#delete CesToolset#delete}. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#update CesToolset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesToolset.CesToolsetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#create CesToolset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesToolset.CesToolsetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#delete CesToolset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesToolset.CesToolsetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_toolset#update CesToolset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference <a name="CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference;

new CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">apiKeySecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig">CesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeySecretVersionInput`<sup>Optional</sup> <a name="apiKeySecretVersionInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```java
public java.lang.String getApiKeySecretVersionInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```java
public java.lang.String getRequestLocationInput();
```

- *Type:* java.lang.String

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```java
public java.lang.String getApiKeySecretVersion();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```java
public java.lang.String getRequestLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationApiKeyConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig">CesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

---


### CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference <a name="CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference;

new CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToken` <a name="resetToken" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```java
public void resetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

---


### CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference <a name="CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference;

new CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```java
public void resetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">clientSecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">clientSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig">CesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretVersionInput`<sup>Optional</sup> <a name="clientSecretVersionInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```java
public java.lang.String getClientSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```java
public java.lang.String getOauthGrantTypeInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```java
public java.lang.String getClientSecretVersion();
```

- *Type:* java.lang.String

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```java
public java.lang.String getOauthGrantType();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationOauthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig">CesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

---


### CesToolsetMcpToolsetApiAuthenticationOutputReference <a name="CesToolsetMcpToolsetApiAuthenticationOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetApiAuthenticationOutputReference;

new CesToolsetMcpToolsetApiAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig">putServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig">putServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig">resetServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig">resetServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig"></a>

```java
public void putApiKeyConfig(CesToolsetMcpToolsetApiAuthenticationApiKeyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig">CesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```java
public void putBearerTokenConfig(CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig"></a>

```java
public void putOauthConfig(CesToolsetMcpToolsetApiAuthenticationOauthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig">CesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

---

##### `putServiceAccountAuthConfig` <a name="putServiceAccountAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```java
public void putServiceAccountAuthConfig(CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `putServiceAgentIdTokenAuthConfig` <a name="putServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig"></a>

```java
public void putServiceAgentIdTokenAuthConfig(CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```java
public void resetApiKeyConfig()
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```java
public void resetBearerTokenConfig()
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetOauthConfig"></a>

```java
public void resetOauthConfig()
```

##### `resetServiceAccountAuthConfig` <a name="resetServiceAccountAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```java
public void resetServiceAccountAuthConfig()
```

##### `resetServiceAgentIdTokenAuthConfig` <a name="resetServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig"></a>

```java
public void resetServiceAgentIdTokenAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig">serviceAgentIdTokenAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig">CesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig">CesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">serviceAccountAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput">serviceAgentIdTokenAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication">CesToolsetMcpToolsetApiAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference getApiKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference getBearerTokenConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfig"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference getOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAccountAuthConfig`<sup>Required</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference getServiceAccountAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `serviceAgentIdTokenAuthConfig`<sup>Required</sup> <a name="serviceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference getServiceAgentIdTokenAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationApiKeyConfig getApiKeyConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationApiKeyConfig">CesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig getBearerTokenConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationOauthConfig getOauthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOauthConfig">CesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

---

##### `serviceAccountAuthConfigInput`<sup>Optional</sup> <a name="serviceAccountAuthConfigInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig getServiceAccountAuthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `serviceAgentIdTokenAuthConfigInput`<sup>Optional</sup> <a name="serviceAgentIdTokenAuthConfigInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig getServiceAgentIdTokenAuthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference.property.internalValue"></a>

```java
public CesToolsetMcpToolsetApiAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication">CesToolsetMcpToolsetApiAuthentication</a>

---


### CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference <a name="CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference;

new CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```java
public void resetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

---


### CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference <a name="CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference;

new CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---


### CesToolsetMcpToolsetOutputReference <a name="CesToolsetMcpToolsetOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetOutputReference;

new CesToolsetMcpToolsetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putApiAuthentication">putApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetApiAuthentication">resetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetCustomHeaders">resetCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiAuthentication` <a name="putApiAuthentication" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putApiAuthentication"></a>

```java
public void putApiAuthentication(CesToolsetMcpToolsetApiAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putApiAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication">CesToolsetMcpToolsetApiAuthentication</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig"></a>

```java
public void putServiceDirectoryConfig(CesToolsetMcpToolsetServiceDirectoryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig">CesToolsetMcpToolsetServiceDirectoryConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putTlsConfig"></a>

```java
public void putTlsConfig(CesToolsetMcpToolsetTlsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig">CesToolsetMcpToolsetTlsConfig</a>

---

##### `resetApiAuthentication` <a name="resetApiAuthentication" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetApiAuthentication"></a>

```java
public void resetApiAuthentication()
```

##### `resetCustomHeaders` <a name="resetCustomHeaders" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetCustomHeaders"></a>

```java
public void resetCustomHeaders()
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetServiceDirectoryConfig"></a>

```java
public void resetServiceDirectoryConfig()
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.resetTlsConfig"></a>

```java
public void resetTlsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference">CesToolsetMcpToolsetApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference">CesToolsetMcpToolsetServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference">CesToolsetMcpToolsetTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.apiAuthenticationInput">apiAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication">CesToolsetMcpToolsetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.customHeadersInput">customHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serverAddressInput">serverAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig">CesToolsetMcpToolsetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig">CesToolsetMcpToolsetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.customHeaders">customHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serverAddress">serverAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiAuthentication`<sup>Required</sup> <a name="apiAuthentication" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.apiAuthentication"></a>

```java
public CesToolsetMcpToolsetApiAuthenticationOutputReference getApiAuthentication();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthenticationOutputReference">CesToolsetMcpToolsetApiAuthenticationOutputReference</a>

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfig"></a>

```java
public CesToolsetMcpToolsetServiceDirectoryConfigOutputReference getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference">CesToolsetMcpToolsetServiceDirectoryConfigOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.tlsConfig"></a>

```java
public CesToolsetMcpToolsetTlsConfigOutputReference getTlsConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference">CesToolsetMcpToolsetTlsConfigOutputReference</a>

---

##### `apiAuthenticationInput`<sup>Optional</sup> <a name="apiAuthenticationInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.apiAuthenticationInput"></a>

```java
public CesToolsetMcpToolsetApiAuthentication getApiAuthenticationInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetApiAuthentication">CesToolsetMcpToolsetApiAuthentication</a>

---

##### `customHeadersInput`<sup>Optional</sup> <a name="customHeadersInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.customHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serverAddressInput`<sup>Optional</sup> <a name="serverAddressInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serverAddressInput"></a>

```java
public java.lang.String getServerAddressInput();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfigInput"></a>

```java
public CesToolsetMcpToolsetServiceDirectoryConfig getServiceDirectoryConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig">CesToolsetMcpToolsetServiceDirectoryConfig</a>

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.tlsConfigInput"></a>

```java
public CesToolsetMcpToolsetTlsConfig getTlsConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig">CesToolsetMcpToolsetTlsConfig</a>

---

##### `customHeaders`<sup>Required</sup> <a name="customHeaders" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.customHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serverAddress`<sup>Required</sup> <a name="serverAddress" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.serverAddress"></a>

```java
public java.lang.String getServerAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetOutputReference.property.internalValue"></a>

```java
public CesToolsetMcpToolset getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolset">CesToolsetMcpToolset</a>

---


### CesToolsetMcpToolsetServiceDirectoryConfigOutputReference <a name="CesToolsetMcpToolsetServiceDirectoryConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference;

new CesToolsetMcpToolsetServiceDirectoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig">CesToolsetMcpToolsetServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.internalValue"></a>

```java
public CesToolsetMcpToolsetServiceDirectoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetServiceDirectoryConfig">CesToolsetMcpToolsetServiceDirectoryConfig</a>

---


### CesToolsetMcpToolsetTlsConfigCaCertsList <a name="CesToolsetMcpToolsetTlsConfigCaCertsList" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetTlsConfigCaCertsList;

new CesToolsetMcpToolsetTlsConfigCaCertsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.get"></a>

```java
public CesToolsetMcpToolsetTlsConfigCaCertsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesToolsetMcpToolsetTlsConfigCaCerts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>>

---


### CesToolsetMcpToolsetTlsConfigCaCertsOutputReference <a name="CesToolsetMcpToolsetTlsConfigCaCertsOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference;

new CesToolsetMcpToolsetTlsConfigCaCertsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.certInput">certInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.certInput"></a>

```java
public java.lang.String getCertInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.internalValue"></a>

```java
public IResolvable|CesToolsetMcpToolsetTlsConfigCaCerts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>

---


### CesToolsetMcpToolsetTlsConfigOutputReference <a name="CesToolsetMcpToolsetTlsConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetMcpToolsetTlsConfigOutputReference;

new CesToolsetMcpToolsetTlsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts">putCaCerts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaCerts` <a name="putCaCerts" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts"></a>

```java
public void putCaCerts(IResolvable|java.util.List<CesToolsetMcpToolsetTlsConfigCaCerts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.caCerts">caCerts</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList">CesToolsetMcpToolsetTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.caCertsInput">caCertsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig">CesToolsetMcpToolsetTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.caCerts"></a>

```java
public CesToolsetMcpToolsetTlsConfigCaCertsList getCaCerts();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCertsList">CesToolsetMcpToolsetTlsConfigCaCertsList</a>

---

##### `caCertsInput`<sup>Optional</sup> <a name="caCertsInput" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.caCertsInput"></a>

```java
public IResolvable|java.util.List<CesToolsetMcpToolsetTlsConfigCaCerts> getCaCertsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigCaCerts">CesToolsetMcpToolsetTlsConfigCaCerts</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfigOutputReference.property.internalValue"></a>

```java
public CesToolsetMcpToolsetTlsConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetMcpToolsetTlsConfig">CesToolsetMcpToolsetTlsConfig</a>

---


### CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference <a name="CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference;

new CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">apiKeySecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeySecretVersionInput`<sup>Optional</sup> <a name="apiKeySecretVersionInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```java
public java.lang.String getApiKeySecretVersionInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```java
public java.lang.String getRequestLocationInput();
```

- *Type:* java.lang.String

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```java
public java.lang.String getApiKeySecretVersion();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```java
public java.lang.String getRequestLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

---


### CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference <a name="CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference;

new CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToken` <a name="resetToken" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```java
public void resetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

---


### CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference <a name="CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference;

new CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```java
public void resetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">clientSecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">clientSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig">CesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretVersionInput`<sup>Optional</sup> <a name="clientSecretVersionInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```java
public java.lang.String getClientSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```java
public java.lang.String getOauthGrantTypeInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```java
public java.lang.String getClientSecretVersion();
```

- *Type:* java.lang.String

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```java
public java.lang.String getOauthGrantType();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationOauthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig">CesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

---


### CesToolsetOpenApiToolsetApiAuthenticationOutputReference <a name="CesToolsetOpenApiToolsetApiAuthenticationOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference;

new CesToolsetOpenApiToolsetApiAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig">putServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig">putServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig">resetServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig">resetServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig"></a>

```java
public void putApiKeyConfig(CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```java
public void putBearerTokenConfig(CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig"></a>

```java
public void putOauthConfig(CesToolsetOpenApiToolsetApiAuthenticationOauthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig">CesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

---

##### `putServiceAccountAuthConfig` <a name="putServiceAccountAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```java
public void putServiceAccountAuthConfig(CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `putServiceAgentIdTokenAuthConfig` <a name="putServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig"></a>

```java
public void putServiceAgentIdTokenAuthConfig(CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```java
public void resetApiKeyConfig()
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```java
public void resetBearerTokenConfig()
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetOauthConfig"></a>

```java
public void resetOauthConfig()
```

##### `resetServiceAccountAuthConfig` <a name="resetServiceAccountAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```java
public void resetServiceAccountAuthConfig()
```

##### `resetServiceAgentIdTokenAuthConfig` <a name="resetServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig"></a>

```java
public void resetServiceAgentIdTokenAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig">serviceAgentIdTokenAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig">CesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">serviceAccountAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput">serviceAgentIdTokenAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication">CesToolsetOpenApiToolsetApiAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference getApiKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference getBearerTokenConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfig"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference getOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAccountAuthConfig`<sup>Required</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference getServiceAccountAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `serviceAgentIdTokenAuthConfig`<sup>Required</sup> <a name="serviceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference getServiceAgentIdTokenAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig getApiKeyConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig getBearerTokenConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationOauthConfig getOauthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOauthConfig">CesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

---

##### `serviceAccountAuthConfigInput`<sup>Optional</sup> <a name="serviceAccountAuthConfigInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig getServiceAccountAuthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `serviceAgentIdTokenAuthConfigInput`<sup>Optional</sup> <a name="serviceAgentIdTokenAuthConfigInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig getServiceAgentIdTokenAuthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.internalValue"></a>

```java
public CesToolsetOpenApiToolsetApiAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication">CesToolsetOpenApiToolsetApiAuthentication</a>

---


### CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference <a name="CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference;

new CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```java
public void resetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

---


### CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference <a name="CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference;

new CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---


### CesToolsetOpenApiToolsetOutputReference <a name="CesToolsetOpenApiToolsetOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetOutputReference;

new CesToolsetOpenApiToolsetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putApiAuthentication">putApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetApiAuthentication">resetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetIgnoreUnknownFields">resetIgnoreUnknownFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiAuthentication` <a name="putApiAuthentication" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putApiAuthentication"></a>

```java
public void putApiAuthentication(CesToolsetOpenApiToolsetApiAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putApiAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication">CesToolsetOpenApiToolsetApiAuthentication</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig"></a>

```java
public void putServiceDirectoryConfig(CesToolsetOpenApiToolsetServiceDirectoryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig">CesToolsetOpenApiToolsetServiceDirectoryConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putTlsConfig"></a>

```java
public void putTlsConfig(CesToolsetOpenApiToolsetTlsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig">CesToolsetOpenApiToolsetTlsConfig</a>

---

##### `resetApiAuthentication` <a name="resetApiAuthentication" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetApiAuthentication"></a>

```java
public void resetApiAuthentication()
```

##### `resetIgnoreUnknownFields` <a name="resetIgnoreUnknownFields" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetIgnoreUnknownFields"></a>

```java
public void resetIgnoreUnknownFields()
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetServiceDirectoryConfig"></a>

```java
public void resetServiceDirectoryConfig()
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.resetTlsConfig"></a>

```java
public void resetTlsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference">CesToolsetOpenApiToolsetApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference">CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference">CesToolsetOpenApiToolsetTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.apiAuthenticationInput">apiAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication">CesToolsetOpenApiToolsetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFieldsInput">ignoreUnknownFieldsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.openApiSchemaInput">openApiSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig">CesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig">CesToolsetOpenApiToolsetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFields">ignoreUnknownFields</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.openApiSchema">openApiSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiAuthentication`<sup>Required</sup> <a name="apiAuthentication" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.apiAuthentication"></a>

```java
public CesToolsetOpenApiToolsetApiAuthenticationOutputReference getApiAuthentication();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthenticationOutputReference">CesToolsetOpenApiToolsetApiAuthenticationOutputReference</a>

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfig"></a>

```java
public CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference">CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.tlsConfig"></a>

```java
public CesToolsetOpenApiToolsetTlsConfigOutputReference getTlsConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference">CesToolsetOpenApiToolsetTlsConfigOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `apiAuthenticationInput`<sup>Optional</sup> <a name="apiAuthenticationInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.apiAuthenticationInput"></a>

```java
public CesToolsetOpenApiToolsetApiAuthentication getApiAuthenticationInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetApiAuthentication">CesToolsetOpenApiToolsetApiAuthentication</a>

---

##### `ignoreUnknownFieldsInput`<sup>Optional</sup> <a name="ignoreUnknownFieldsInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFieldsInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreUnknownFieldsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `openApiSchemaInput`<sup>Optional</sup> <a name="openApiSchemaInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.openApiSchemaInput"></a>

```java
public java.lang.String getOpenApiSchemaInput();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfigInput"></a>

```java
public CesToolsetOpenApiToolsetServiceDirectoryConfig getServiceDirectoryConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig">CesToolsetOpenApiToolsetServiceDirectoryConfig</a>

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.tlsConfigInput"></a>

```java
public CesToolsetOpenApiToolsetTlsConfig getTlsConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig">CesToolsetOpenApiToolsetTlsConfig</a>

---

##### `ignoreUnknownFields`<sup>Required</sup> <a name="ignoreUnknownFields" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFields"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreUnknownFields();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `openApiSchema`<sup>Required</sup> <a name="openApiSchema" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.openApiSchema"></a>

```java
public java.lang.String getOpenApiSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetOutputReference.property.internalValue"></a>

```java
public CesToolsetOpenApiToolset getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolset">CesToolsetOpenApiToolset</a>

---


### CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference <a name="CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference;

new CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig">CesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.internalValue"></a>

```java
public CesToolsetOpenApiToolsetServiceDirectoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetServiceDirectoryConfig">CesToolsetOpenApiToolsetServiceDirectoryConfig</a>

---


### CesToolsetOpenApiToolsetTlsConfigCaCertsList <a name="CesToolsetOpenApiToolsetTlsConfigCaCertsList" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList;

new CesToolsetOpenApiToolsetTlsConfigCaCertsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.get"></a>

```java
public CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesToolsetOpenApiToolsetTlsConfigCaCerts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>>

---


### CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference <a name="CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference;

new CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.certInput">certInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.certInput"></a>

```java
public java.lang.String getCertInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.internalValue"></a>

```java
public IResolvable|CesToolsetOpenApiToolsetTlsConfigCaCerts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>

---


### CesToolsetOpenApiToolsetTlsConfigOutputReference <a name="CesToolsetOpenApiToolsetTlsConfigOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetOpenApiToolsetTlsConfigOutputReference;

new CesToolsetOpenApiToolsetTlsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts">putCaCerts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaCerts` <a name="putCaCerts" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts"></a>

```java
public void putCaCerts(IResolvable|java.util.List<CesToolsetOpenApiToolsetTlsConfigCaCerts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCerts">caCerts</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList">CesToolsetOpenApiToolsetTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCertsInput">caCertsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig">CesToolsetOpenApiToolsetTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCerts"></a>

```java
public CesToolsetOpenApiToolsetTlsConfigCaCertsList getCaCerts();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCertsList">CesToolsetOpenApiToolsetTlsConfigCaCertsList</a>

---

##### `caCertsInput`<sup>Optional</sup> <a name="caCertsInput" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCertsInput"></a>

```java
public IResolvable|java.util.List<CesToolsetOpenApiToolsetTlsConfigCaCerts> getCaCertsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigCaCerts">CesToolsetOpenApiToolsetTlsConfigCaCerts</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfigOutputReference.property.internalValue"></a>

```java
public CesToolsetOpenApiToolsetTlsConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesToolset.CesToolsetOpenApiToolsetTlsConfig">CesToolsetOpenApiToolsetTlsConfig</a>

---


### CesToolsetTimeoutsOutputReference <a name="CesToolsetTimeoutsOutputReference" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_toolset.CesToolsetTimeoutsOutputReference;

new CesToolsetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesToolset.CesToolsetTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CesToolsetTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesToolset.CesToolsetTimeouts">CesToolsetTimeouts</a>

---



