# `dataGoogleAgentRegistryMcpServer` Submodule <a name="`dataGoogleAgentRegistryMcpServer` Submodule" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAgentRegistryMcpServer <a name="DataGoogleAgentRegistryMcpServer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server google_agent_registry_mcp_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServer;

DataGoogleAgentRegistryMcpServer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .mcpServerId(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | A filter string that identifies a unique MCP server. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#id DataGoogleAgentRegistryMcpServer#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.mcpServerId">mcpServerId</a></code> | <code>java.lang.String</code> | The unique identifier for the MCP server. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#project DataGoogleAgentRegistryMcpServer#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#location DataGoogleAgentRegistryMcpServer#location}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

A filter string that identifies a unique MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#filter DataGoogleAgentRegistryMcpServer#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#id DataGoogleAgentRegistryMcpServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcpServerId`<sup>Optional</sup> <a name="mcpServerId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.mcpServerId"></a>

- *Type:* java.lang.String

The unique identifier for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#mcp_server_id DataGoogleAgentRegistryMcpServer#mcp_server_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#project DataGoogleAgentRegistryMcpServer#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetMcpServerId">resetMcpServerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetId"></a>

```java
public void resetId()
```

##### `resetMcpServerId` <a name="resetMcpServerId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetMcpServerId"></a>

```java
public void resetMcpServerId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleAgentRegistryMcpServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServer;

DataGoogleAgentRegistryMcpServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServer;

DataGoogleAgentRegistryMcpServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServer;

DataGoogleAgentRegistryMcpServer.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServer;

DataGoogleAgentRegistryMcpServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleAgentRegistryMcpServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleAgentRegistryMcpServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleAgentRegistryMcpServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleAgentRegistryMcpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleAgentRegistryMcpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.attributes">attributes</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.interfaces">interfaces</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList">DataGoogleAgentRegistryMcpServerInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.tools">tools</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList">DataGoogleAgentRegistryMcpServerToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.urn">urn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.mcpServerIdInput">mcpServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.mcpServerId">mcpServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.attributes"></a>

```java
public StringMap getAttributes();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `interfaces`<sup>Required</sup> <a name="interfaces" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.interfaces"></a>

```java
public DataGoogleAgentRegistryMcpServerInterfacesList getInterfaces();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList">DataGoogleAgentRegistryMcpServerInterfacesList</a>

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.tools"></a>

```java
public DataGoogleAgentRegistryMcpServerToolsList getTools();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList">DataGoogleAgentRegistryMcpServerToolsList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.urn"></a>

```java
public java.lang.String getUrn();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mcpServerIdInput`<sup>Optional</sup> <a name="mcpServerIdInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.mcpServerIdInput"></a>

```java
public java.lang.String getMcpServerIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mcpServerId`<sup>Required</sup> <a name="mcpServerId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.mcpServerId"></a>

```java
public java.lang.String getMcpServerId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAgentRegistryMcpServerConfig <a name="DataGoogleAgentRegistryMcpServerConfig" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServerConfig;

DataGoogleAgentRegistryMcpServerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .mcpServerId(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | A filter string that identifies a unique MCP server. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#id DataGoogleAgentRegistryMcpServer#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.mcpServerId">mcpServerId</a></code> | <code>java.lang.String</code> | The unique identifier for the MCP server. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#project DataGoogleAgentRegistryMcpServer#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#location DataGoogleAgentRegistryMcpServer#location}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

A filter string that identifies a unique MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#filter DataGoogleAgentRegistryMcpServer#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#id DataGoogleAgentRegistryMcpServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcpServerId`<sup>Optional</sup> <a name="mcpServerId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.mcpServerId"></a>

```java
public java.lang.String getMcpServerId();
```

- *Type:* java.lang.String

The unique identifier for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#mcp_server_id DataGoogleAgentRegistryMcpServer#mcp_server_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/agent_registry_mcp_server#project DataGoogleAgentRegistryMcpServer#project}.

---

### DataGoogleAgentRegistryMcpServerInterfaces <a name="DataGoogleAgentRegistryMcpServerInterfaces" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfaces.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServerInterfaces;

DataGoogleAgentRegistryMcpServerInterfaces.builder()
    .build();
```


### DataGoogleAgentRegistryMcpServerTools <a name="DataGoogleAgentRegistryMcpServerTools" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerTools.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServerTools;

DataGoogleAgentRegistryMcpServerTools.builder()
    .build();
```


### DataGoogleAgentRegistryMcpServerToolsAnnotations <a name="DataGoogleAgentRegistryMcpServerToolsAnnotations" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotations.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServerToolsAnnotations;

DataGoogleAgentRegistryMcpServerToolsAnnotations.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAgentRegistryMcpServerInterfacesList <a name="DataGoogleAgentRegistryMcpServerInterfacesList" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServerInterfacesList;

new DataGoogleAgentRegistryMcpServerInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.get"></a>

```java
public DataGoogleAgentRegistryMcpServerInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleAgentRegistryMcpServerInterfacesOutputReference <a name="DataGoogleAgentRegistryMcpServerInterfacesOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServerInterfacesOutputReference;

new DataGoogleAgentRegistryMcpServerInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.protocolBinding">protocolBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfaces">DataGoogleAgentRegistryMcpServerInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `protocolBinding`<sup>Required</sup> <a name="protocolBinding" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.protocolBinding"></a>

```java
public java.lang.String getProtocolBinding();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.internalValue"></a>

```java
public DataGoogleAgentRegistryMcpServerInterfaces getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfaces">DataGoogleAgentRegistryMcpServerInterfaces</a>

---


### DataGoogleAgentRegistryMcpServerToolsAnnotationsList <a name="DataGoogleAgentRegistryMcpServerToolsAnnotationsList" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServerToolsAnnotationsList;

new DataGoogleAgentRegistryMcpServerToolsAnnotationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.get"></a>

```java
public DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference <a name="DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference;

new DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.destructiveHint">destructiveHint</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.idempotentHint">idempotentHint</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.openWorldHint">openWorldHint</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.readOnlyHint">readOnlyHint</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotations">DataGoogleAgentRegistryMcpServerToolsAnnotations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destructiveHint`<sup>Required</sup> <a name="destructiveHint" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.destructiveHint"></a>

```java
public IResolvable getDestructiveHint();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `idempotentHint`<sup>Required</sup> <a name="idempotentHint" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.idempotentHint"></a>

```java
public IResolvable getIdempotentHint();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `openWorldHint`<sup>Required</sup> <a name="openWorldHint" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.openWorldHint"></a>

```java
public IResolvable getOpenWorldHint();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `readOnlyHint`<sup>Required</sup> <a name="readOnlyHint" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.readOnlyHint"></a>

```java
public IResolvable getReadOnlyHint();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.internalValue"></a>

```java
public DataGoogleAgentRegistryMcpServerToolsAnnotations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotations">DataGoogleAgentRegistryMcpServerToolsAnnotations</a>

---


### DataGoogleAgentRegistryMcpServerToolsList <a name="DataGoogleAgentRegistryMcpServerToolsList" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServerToolsList;

new DataGoogleAgentRegistryMcpServerToolsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.get"></a>

```java
public DataGoogleAgentRegistryMcpServerToolsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleAgentRegistryMcpServerToolsOutputReference <a name="DataGoogleAgentRegistryMcpServerToolsOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_agent_registry_mcp_server.DataGoogleAgentRegistryMcpServerToolsOutputReference;

new DataGoogleAgentRegistryMcpServerToolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.annotations">annotations</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList">DataGoogleAgentRegistryMcpServerToolsAnnotationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerTools">DataGoogleAgentRegistryMcpServerTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.annotations"></a>

```java
public DataGoogleAgentRegistryMcpServerToolsAnnotationsList getAnnotations();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList">DataGoogleAgentRegistryMcpServerToolsAnnotationsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.internalValue"></a>

```java
public DataGoogleAgentRegistryMcpServerTools getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerTools">DataGoogleAgentRegistryMcpServerTools</a>

---



