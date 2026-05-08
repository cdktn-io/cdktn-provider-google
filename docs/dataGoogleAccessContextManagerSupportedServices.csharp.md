# `dataGoogleAccessContextManagerSupportedServices` Submodule <a name="`dataGoogleAccessContextManagerSupportedServices` Submodule" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAccessContextManagerSupportedServices <a name="DataGoogleAccessContextManagerSupportedServices" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/access_context_manager_supported_services google_access_context_manager_supported_services}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAccessContextManagerSupportedServices(Construct Scope, string Id, DataGoogleAccessContextManagerSupportedServicesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig">DataGoogleAccessContextManagerSupportedServicesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig">DataGoogleAccessContextManagerSupportedServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleAccessContextManagerSupportedServices resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAccessContextManagerSupportedServices.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAccessContextManagerSupportedServices.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAccessContextManagerSupportedServices.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAccessContextManagerSupportedServices.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleAccessContextManagerSupportedServices resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleAccessContextManagerSupportedServices to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleAccessContextManagerSupportedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/access_context_manager_supported_services#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleAccessContextManagerSupportedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.supportedServices">SupportedServices</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList">DataGoogleAccessContextManagerSupportedServicesSupportedServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `SupportedServices`<sup>Required</sup> <a name="SupportedServices" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.supportedServices"></a>

```csharp
public DataGoogleAccessContextManagerSupportedServicesSupportedServicesList SupportedServices { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList">DataGoogleAccessContextManagerSupportedServicesSupportedServicesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServices.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAccessContextManagerSupportedServicesConfig <a name="DataGoogleAccessContextManagerSupportedServicesConfig" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAccessContextManagerSupportedServicesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/access_context_manager_supported_services#id DataGoogleAccessContextManagerSupportedServices#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/access_context_manager_supported_services#id DataGoogleAccessContextManagerSupportedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleAccessContextManagerSupportedServicesSupportedServices <a name="DataGoogleAccessContextManagerSupportedServicesSupportedServices" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAccessContextManagerSupportedServicesSupportedServices {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAccessContextManagerSupportedServicesSupportedServicesList <a name="DataGoogleAccessContextManagerSupportedServicesSupportedServicesList" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAccessContextManagerSupportedServicesSupportedServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.get"></a>

```csharp
private DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference <a name="DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.availableOnRestrictedVip">AvailableOnRestrictedVip</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.knownLimitations">KnownLimitations</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.serviceSupportStage">ServiceSupportStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.supportStage">SupportStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServices">DataGoogleAccessContextManagerSupportedServicesSupportedServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableOnRestrictedVip`<sup>Required</sup> <a name="AvailableOnRestrictedVip" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.availableOnRestrictedVip"></a>

```csharp
public IResolvable AvailableOnRestrictedVip { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KnownLimitations`<sup>Required</sup> <a name="KnownLimitations" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.knownLimitations"></a>

```csharp
public IResolvable KnownLimitations { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceSupportStage`<sup>Required</sup> <a name="ServiceSupportStage" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.serviceSupportStage"></a>

```csharp
public string ServiceSupportStage { get; }
```

- *Type:* string

---

##### `SupportStage`<sup>Required</sup> <a name="SupportStage" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.supportStage"></a>

```csharp
public string SupportStage { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServicesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAccessContextManagerSupportedServicesSupportedServices InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedServices.DataGoogleAccessContextManagerSupportedServicesSupportedServices">DataGoogleAccessContextManagerSupportedServicesSupportedServices</a>

---



