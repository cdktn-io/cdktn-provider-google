# `dataGoogleAgentRegistryMcpServer` Submodule <a name="`dataGoogleAgentRegistryMcpServer` Submodule" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAgentRegistryMcpServer <a name="DataGoogleAgentRegistryMcpServer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_mcp_server google_agent_registry_mcp_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryMcpServer(Construct Scope, string Id, DataGoogleAgentRegistryMcpServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig">DataGoogleAgentRegistryMcpServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig">DataGoogleAgentRegistryMcpServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetMcpServerId">ResetMcpServerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMcpServerId` <a name="ResetMcpServerId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetMcpServerId"></a>

```csharp
private void ResetMcpServerId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleAgentRegistryMcpServer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAgentRegistryMcpServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAgentRegistryMcpServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAgentRegistryMcpServer.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAgentRegistryMcpServer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleAgentRegistryMcpServer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleAgentRegistryMcpServer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleAgentRegistryMcpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_mcp_server#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleAgentRegistryMcpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.attributes">Attributes</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.interfaces">Interfaces</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList">DataGoogleAgentRegistryMcpServerInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.tools">Tools</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList">DataGoogleAgentRegistryMcpServerToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.urn">Urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.mcpServerIdInput">McpServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.mcpServerId">McpServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.attributes"></a>

```csharp
public StringMap Attributes { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Interfaces`<sup>Required</sup> <a name="Interfaces" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.interfaces"></a>

```csharp
public DataGoogleAgentRegistryMcpServerInterfacesList Interfaces { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList">DataGoogleAgentRegistryMcpServerInterfacesList</a>

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.tools"></a>

```csharp
public DataGoogleAgentRegistryMcpServerToolsList Tools { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList">DataGoogleAgentRegistryMcpServerToolsList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.urn"></a>

```csharp
public string Urn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `McpServerIdInput`<sup>Optional</sup> <a name="McpServerIdInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.mcpServerIdInput"></a>

```csharp
public string McpServerIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `McpServerId`<sup>Required</sup> <a name="McpServerId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.mcpServerId"></a>

```csharp
public string McpServerId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAgentRegistryMcpServerConfig <a name="DataGoogleAgentRegistryMcpServerConfig" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryMcpServerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Filter = null,
    string Id = null,
    string McpServerId = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.filter">Filter</a></code> | <code>string</code> | A filter string that identifies a unique MCP server. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_mcp_server#id DataGoogleAgentRegistryMcpServer#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.mcpServerId">McpServerId</a></code> | <code>string</code> | The unique identifier for the MCP server. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_mcp_server#project DataGoogleAgentRegistryMcpServer#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_mcp_server#location DataGoogleAgentRegistryMcpServer#location}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

A filter string that identifies a unique MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_mcp_server#filter DataGoogleAgentRegistryMcpServer#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_mcp_server#id DataGoogleAgentRegistryMcpServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `McpServerId`<sup>Optional</sup> <a name="McpServerId" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.mcpServerId"></a>

```csharp
public string McpServerId { get; set; }
```

- *Type:* string

The unique identifier for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_mcp_server#mcp_server_id DataGoogleAgentRegistryMcpServer#mcp_server_id}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/agent_registry_mcp_server#project DataGoogleAgentRegistryMcpServer#project}.

---

### DataGoogleAgentRegistryMcpServerInterfaces <a name="DataGoogleAgentRegistryMcpServerInterfaces" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryMcpServerInterfaces {

};
```


### DataGoogleAgentRegistryMcpServerTools <a name="DataGoogleAgentRegistryMcpServerTools" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerTools.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryMcpServerTools {

};
```


### DataGoogleAgentRegistryMcpServerToolsAnnotations <a name="DataGoogleAgentRegistryMcpServerToolsAnnotations" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryMcpServerToolsAnnotations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAgentRegistryMcpServerInterfacesList <a name="DataGoogleAgentRegistryMcpServerInterfacesList" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryMcpServerInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.get"></a>

```csharp
private DataGoogleAgentRegistryMcpServerInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAgentRegistryMcpServerInterfacesOutputReference <a name="DataGoogleAgentRegistryMcpServerInterfacesOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryMcpServerInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.protocolBinding">ProtocolBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfaces">DataGoogleAgentRegistryMcpServerInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProtocolBinding`<sup>Required</sup> <a name="ProtocolBinding" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.protocolBinding"></a>

```csharp
public string ProtocolBinding { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfacesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAgentRegistryMcpServerInterfaces InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerInterfaces">DataGoogleAgentRegistryMcpServerInterfaces</a>

---


### DataGoogleAgentRegistryMcpServerToolsAnnotationsList <a name="DataGoogleAgentRegistryMcpServerToolsAnnotationsList" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryMcpServerToolsAnnotationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.get"></a>

```csharp
private DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference <a name="DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.destructiveHint">DestructiveHint</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.idempotentHint">IdempotentHint</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.openWorldHint">OpenWorldHint</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.readOnlyHint">ReadOnlyHint</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotations">DataGoogleAgentRegistryMcpServerToolsAnnotations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestructiveHint`<sup>Required</sup> <a name="DestructiveHint" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.destructiveHint"></a>

```csharp
public IResolvable DestructiveHint { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IdempotentHint`<sup>Required</sup> <a name="IdempotentHint" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.idempotentHint"></a>

```csharp
public IResolvable IdempotentHint { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `OpenWorldHint`<sup>Required</sup> <a name="OpenWorldHint" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.openWorldHint"></a>

```csharp
public IResolvable OpenWorldHint { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ReadOnlyHint`<sup>Required</sup> <a name="ReadOnlyHint" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.readOnlyHint"></a>

```csharp
public IResolvable ReadOnlyHint { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAgentRegistryMcpServerToolsAnnotations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotations">DataGoogleAgentRegistryMcpServerToolsAnnotations</a>

---


### DataGoogleAgentRegistryMcpServerToolsList <a name="DataGoogleAgentRegistryMcpServerToolsList" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryMcpServerToolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.get"></a>

```csharp
private DataGoogleAgentRegistryMcpServerToolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAgentRegistryMcpServerToolsOutputReference <a name="DataGoogleAgentRegistryMcpServerToolsOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryMcpServerToolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.annotations">Annotations</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList">DataGoogleAgentRegistryMcpServerToolsAnnotationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerTools">DataGoogleAgentRegistryMcpServerTools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.annotations"></a>

```csharp
public DataGoogleAgentRegistryMcpServerToolsAnnotationsList Annotations { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsAnnotationsList">DataGoogleAgentRegistryMcpServerToolsAnnotationsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerToolsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAgentRegistryMcpServerTools InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryMcpServer.DataGoogleAgentRegistryMcpServerTools">DataGoogleAgentRegistryMcpServerTools</a>

---



