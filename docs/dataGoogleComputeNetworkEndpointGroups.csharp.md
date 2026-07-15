# `dataGoogleComputeNetworkEndpointGroups` Submodule <a name="`dataGoogleComputeNetworkEndpointGroups` Submodule" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeNetworkEndpointGroups <a name="DataGoogleComputeNetworkEndpointGroups" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups google_compute_network_endpoint_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeNetworkEndpointGroups(Construct Scope, string Id, DataGoogleComputeNetworkEndpointGroupsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig">DataGoogleComputeNetworkEndpointGroupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig">DataGoogleComputeNetworkEndpointGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeNetworkEndpointGroups resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeNetworkEndpointGroups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeNetworkEndpointGroups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeNetworkEndpointGroups.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeNetworkEndpointGroups.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleComputeNetworkEndpointGroups resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeNetworkEndpointGroups to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeNetworkEndpointGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeNetworkEndpointGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.networkEndpointGroups">NetworkEndpointGroups</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `NetworkEndpointGroups`<sup>Required</sup> <a name="NetworkEndpointGroups" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.networkEndpointGroups"></a>

```csharp
public DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList NetworkEndpointGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeNetworkEndpointGroupsConfig <a name="DataGoogleComputeNetworkEndpointGroupsConfig" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeNetworkEndpointGroupsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Filter = null,
    string Id = null,
    string Project = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.filter">Filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#filter DataGoogleComputeNetworkEndpointGroups#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#id DataGoogleComputeNetworkEndpointGroups#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#project DataGoogleComputeNetworkEndpointGroups#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.zone">Zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#zone DataGoogleComputeNetworkEndpointGroups#zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#filter DataGoogleComputeNetworkEndpointGroups#filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#id DataGoogleComputeNetworkEndpointGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#project DataGoogleComputeNetworkEndpointGroups#project}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/compute_network_endpoint_groups#zone DataGoogleComputeNetworkEndpointGroups#zone}.

---

### DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups <a name="DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList <a name="DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.get"></a>

```csharp
private DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference <a name="DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.defaultPort">DefaultPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.generatedId">GeneratedId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.networkEndpointType">NetworkEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultPort`<sup>Required</sup> <a name="DefaultPort" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.defaultPort"></a>

```csharp
public double DefaultPort { get; }
```

- *Type:* double

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GeneratedId`<sup>Required</sup> <a name="GeneratedId" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.generatedId"></a>

```csharp
public double GeneratedId { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NetworkEndpointType`<sup>Required</sup> <a name="NetworkEndpointType" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.networkEndpointType"></a>

```csharp
public string NetworkEndpointType { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroupsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeNetworkEndpointGroups.DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups">DataGoogleComputeNetworkEndpointGroupsNetworkEndpointGroups</a>

---



