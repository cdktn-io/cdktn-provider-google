# `dataGoogleComputeRouters` Submodule <a name="`dataGoogleComputeRouters` Submodule" id="@cdktn/provider-google.dataGoogleComputeRouters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRouters <a name="DataGoogleComputeRouters" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers google_compute_routers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRouters(Construct Scope, string Id, DataGoogleComputeRoutersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig">DataGoogleComputeRoutersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig">DataGoogleComputeRoutersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeRouters resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeRouters.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeRouters.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeRouters.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeRouters.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleComputeRouters resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeRouters to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeRouters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRouters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.routers">Routers</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList">DataGoogleComputeRoutersRoutersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Routers`<sup>Required</sup> <a name="Routers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.routers"></a>

```csharp
public DataGoogleComputeRoutersRoutersList Routers { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList">DataGoogleComputeRoutersRoutersList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRouters.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRoutersConfig <a name="DataGoogleComputeRoutersConfig" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers#id DataGoogleComputeRouters#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers#project DataGoogleComputeRouters#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers#region DataGoogleComputeRouters#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers#id DataGoogleComputeRouters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers#project DataGoogleComputeRouters#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_routers#region DataGoogleComputeRouters#region}.

---

### DataGoogleComputeRoutersRouters <a name="DataGoogleComputeRoutersRouters" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRouters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRouters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRouters {

};
```


### DataGoogleComputeRoutersRoutersBgp <a name="DataGoogleComputeRoutersRoutersBgp" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersBgp {

};
```


### DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges <a name="DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges {

};
```


### DataGoogleComputeRoutersRoutersBgpPeers <a name="DataGoogleComputeRoutersRoutersBgpPeers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersBgpPeers {

};
```


### DataGoogleComputeRoutersRoutersInterfaces <a name="DataGoogleComputeRoutersRoutersInterfaces" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersInterfaces {

};
```


### DataGoogleComputeRoutersRoutersMd5AuthenticationKeys <a name="DataGoogleComputeRoutersRoutersMd5AuthenticationKeys" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeys.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersMd5AuthenticationKeys {

};
```


### DataGoogleComputeRoutersRoutersNats <a name="DataGoogleComputeRoutersRoutersNats" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNats.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersNats {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList <a name="DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.get"></a>

```csharp
private DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference <a name="DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.range">Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges">DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.range"></a>

```csharp
public string Range { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges">DataGoogleComputeRoutersRoutersBgpAdvertisedIpRanges</a>

---


### DataGoogleComputeRoutersRoutersBgpList <a name="DataGoogleComputeRoutersRoutersBgpList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersBgpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.get"></a>

```csharp
private DataGoogleComputeRoutersRoutersBgpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRoutersRoutersBgpOutputReference <a name="DataGoogleComputeRoutersRoutersBgpOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersBgpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertisedGroups">AdvertisedGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertisedIpRanges">AdvertisedIpRanges</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList">DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertiseMode">AdvertiseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.asn">Asn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.keepaliveInterval">KeepaliveInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgp">DataGoogleComputeRoutersRoutersBgp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvertisedGroups`<sup>Required</sup> <a name="AdvertisedGroups" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertisedGroups"></a>

```csharp
public string[] AdvertisedGroups { get; }
```

- *Type:* string[]

---

##### `AdvertisedIpRanges`<sup>Required</sup> <a name="AdvertisedIpRanges" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertisedIpRanges"></a>

```csharp
public DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList AdvertisedIpRanges { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList">DataGoogleComputeRoutersRoutersBgpAdvertisedIpRangesList</a>

---

##### `AdvertiseMode`<sup>Required</sup> <a name="AdvertiseMode" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.advertiseMode"></a>

```csharp
public string AdvertiseMode { get; }
```

- *Type:* string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.asn"></a>

```csharp
public double Asn { get; }
```

- *Type:* double

---

##### `KeepaliveInterval`<sup>Required</sup> <a name="KeepaliveInterval" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.keepaliveInterval"></a>

```csharp
public double KeepaliveInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRoutersRoutersBgp InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgp">DataGoogleComputeRoutersRoutersBgp</a>

---


### DataGoogleComputeRoutersRoutersBgpPeersList <a name="DataGoogleComputeRoutersRoutersBgpPeersList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersBgpPeersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.get"></a>

```csharp
private DataGoogleComputeRoutersRoutersBgpPeersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRoutersRoutersBgpPeersOutputReference <a name="DataGoogleComputeRoutersRoutersBgpPeersOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersBgpPeersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.advertisedRoutePriority">AdvertisedRoutePriority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.advertiseMode">AdvertiseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.enable">Enable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.enableIpv6">EnableIpv6</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.managementType">ManagementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.peerAsn">PeerAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.peerIpAddress">PeerIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeers">DataGoogleComputeRoutersRoutersBgpPeers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvertisedRoutePriority`<sup>Required</sup> <a name="AdvertisedRoutePriority" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.advertisedRoutePriority"></a>

```csharp
public double AdvertisedRoutePriority { get; }
```

- *Type:* double

---

##### `AdvertiseMode`<sup>Required</sup> <a name="AdvertiseMode" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.advertiseMode"></a>

```csharp
public string AdvertiseMode { get; }
```

- *Type:* string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.enable"></a>

```csharp
public string Enable { get; }
```

- *Type:* string

---

##### `EnableIpv6`<sup>Required</sup> <a name="EnableIpv6" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.enableIpv6"></a>

```csharp
public IResolvable EnableIpv6 { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `ManagementType`<sup>Required</sup> <a name="ManagementType" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.managementType"></a>

```csharp
public string ManagementType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PeerAsn`<sup>Required</sup> <a name="PeerAsn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.peerAsn"></a>

```csharp
public double PeerAsn { get; }
```

- *Type:* double

---

##### `PeerIpAddress`<sup>Required</sup> <a name="PeerIpAddress" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.peerIpAddress"></a>

```csharp
public string PeerIpAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRoutersRoutersBgpPeers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeers">DataGoogleComputeRoutersRoutersBgpPeers</a>

---


### DataGoogleComputeRoutersRoutersInterfacesList <a name="DataGoogleComputeRoutersRoutersInterfacesList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.get"></a>

```csharp
private DataGoogleComputeRoutersRoutersInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRoutersRoutersInterfacesOutputReference <a name="DataGoogleComputeRoutersRoutersInterfacesOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.ipRange">IpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.linkedInterconnectAttachment">LinkedInterconnectAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.linkedVpnTunnel">LinkedVpnTunnel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.redundantInterface">RedundantInterface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfaces">DataGoogleComputeRoutersRoutersInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.ipRange"></a>

```csharp
public string IpRange { get; }
```

- *Type:* string

---

##### `LinkedInterconnectAttachment`<sup>Required</sup> <a name="LinkedInterconnectAttachment" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.linkedInterconnectAttachment"></a>

```csharp
public string LinkedInterconnectAttachment { get; }
```

- *Type:* string

---

##### `LinkedVpnTunnel`<sup>Required</sup> <a name="LinkedVpnTunnel" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.linkedVpnTunnel"></a>

```csharp
public string LinkedVpnTunnel { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `RedundantInterface`<sup>Required</sup> <a name="RedundantInterface" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.redundantInterface"></a>

```csharp
public string RedundantInterface { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRoutersRoutersInterfaces InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfaces">DataGoogleComputeRoutersRoutersInterfaces</a>

---


### DataGoogleComputeRoutersRoutersList <a name="DataGoogleComputeRoutersRoutersList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.get"></a>

```csharp
private DataGoogleComputeRoutersRoutersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList <a name="DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.get"></a>

```csharp
private DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference <a name="DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeys">DataGoogleComputeRoutersRoutersMd5AuthenticationKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRoutersRoutersMd5AuthenticationKeys InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeys">DataGoogleComputeRoutersRoutersMd5AuthenticationKeys</a>

---


### DataGoogleComputeRoutersRoutersNatsList <a name="DataGoogleComputeRoutersRoutersNatsList" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersNatsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.get"></a>

```csharp
private DataGoogleComputeRoutersRoutersNatsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRoutersRoutersNatsOutputReference <a name="DataGoogleComputeRoutersRoutersNatsOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersNatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.enableEndpointIndependentMapping">EnableEndpointIndependentMapping</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.icmpIdleTimeoutSec">IcmpIdleTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.minPortsPerVm">MinPortsPerVm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.natIpAllocateOption">NatIpAllocateOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.natIps">NatIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.sourceSubnetworkIpRangesToNat">SourceSubnetworkIpRangesToNat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.tcpEstablishedIdleTimeoutSec">TcpEstablishedIdleTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.tcpTransitoryIdleTimeoutSec">TcpTransitoryIdleTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.udpIdleTimeoutSec">UdpIdleTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNats">DataGoogleComputeRoutersRoutersNats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableEndpointIndependentMapping`<sup>Required</sup> <a name="EnableEndpointIndependentMapping" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.enableEndpointIndependentMapping"></a>

```csharp
public IResolvable EnableEndpointIndependentMapping { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IcmpIdleTimeoutSec`<sup>Required</sup> <a name="IcmpIdleTimeoutSec" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.icmpIdleTimeoutSec"></a>

```csharp
public double IcmpIdleTimeoutSec { get; }
```

- *Type:* double

---

##### `MinPortsPerVm`<sup>Required</sup> <a name="MinPortsPerVm" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.minPortsPerVm"></a>

```csharp
public double MinPortsPerVm { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NatIpAllocateOption`<sup>Required</sup> <a name="NatIpAllocateOption" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.natIpAllocateOption"></a>

```csharp
public string NatIpAllocateOption { get; }
```

- *Type:* string

---

##### `NatIps`<sup>Required</sup> <a name="NatIps" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.natIps"></a>

```csharp
public string[] NatIps { get; }
```

- *Type:* string[]

---

##### `SourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="SourceSubnetworkIpRangesToNat" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.sourceSubnetworkIpRangesToNat"></a>

```csharp
public string SourceSubnetworkIpRangesToNat { get; }
```

- *Type:* string

---

##### `TcpEstablishedIdleTimeoutSec`<sup>Required</sup> <a name="TcpEstablishedIdleTimeoutSec" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.tcpEstablishedIdleTimeoutSec"></a>

```csharp
public double TcpEstablishedIdleTimeoutSec { get; }
```

- *Type:* double

---

##### `TcpTransitoryIdleTimeoutSec`<sup>Required</sup> <a name="TcpTransitoryIdleTimeoutSec" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.tcpTransitoryIdleTimeoutSec"></a>

```csharp
public double TcpTransitoryIdleTimeoutSec { get; }
```

- *Type:* double

---

##### `UdpIdleTimeoutSec`<sup>Required</sup> <a name="UdpIdleTimeoutSec" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.udpIdleTimeoutSec"></a>

```csharp
public double UdpIdleTimeoutSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRoutersRoutersNats InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNats">DataGoogleComputeRoutersRoutersNats</a>

---


### DataGoogleComputeRoutersRoutersOutputReference <a name="DataGoogleComputeRoutersRoutersOutputReference" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRoutersRoutersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.bgp">Bgp</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList">DataGoogleComputeRoutersRoutersBgpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.bgpPeers">BgpPeers</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList">DataGoogleComputeRoutersRoutersBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.encryptedInterconnectRouter">EncryptedInterconnectRouter</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.interfaces">Interfaces</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList">DataGoogleComputeRoutersRoutersInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.md5AuthenticationKeys">Md5AuthenticationKeys</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList">DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.nats">Nats</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList">DataGoogleComputeRoutersRoutersNatsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRouters">DataGoogleComputeRoutersRouters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bgp`<sup>Required</sup> <a name="Bgp" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.bgp"></a>

```csharp
public DataGoogleComputeRoutersRoutersBgpList Bgp { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpList">DataGoogleComputeRoutersRoutersBgpList</a>

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.bgpPeers"></a>

```csharp
public DataGoogleComputeRoutersRoutersBgpPeersList BgpPeers { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersBgpPeersList">DataGoogleComputeRoutersRoutersBgpPeersList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EncryptedInterconnectRouter`<sup>Required</sup> <a name="EncryptedInterconnectRouter" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.encryptedInterconnectRouter"></a>

```csharp
public IResolvable EncryptedInterconnectRouter { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Interfaces`<sup>Required</sup> <a name="Interfaces" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.interfaces"></a>

```csharp
public DataGoogleComputeRoutersRoutersInterfacesList Interfaces { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersInterfacesList">DataGoogleComputeRoutersRoutersInterfacesList</a>

---

##### `Md5AuthenticationKeys`<sup>Required</sup> <a name="Md5AuthenticationKeys" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.md5AuthenticationKeys"></a>

```csharp
public DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList Md5AuthenticationKeys { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList">DataGoogleComputeRoutersRoutersMd5AuthenticationKeysList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nats`<sup>Required</sup> <a name="Nats" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.nats"></a>

```csharp
public DataGoogleComputeRoutersRoutersNatsList Nats { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersNatsList">DataGoogleComputeRoutersRoutersNatsList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRoutersOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRoutersRouters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRouters.DataGoogleComputeRoutersRouters">DataGoogleComputeRoutersRouters</a>

---



