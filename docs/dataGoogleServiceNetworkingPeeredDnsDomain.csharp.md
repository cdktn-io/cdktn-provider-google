# `dataGoogleServiceNetworkingPeeredDnsDomain` Submodule <a name="`dataGoogleServiceNetworkingPeeredDnsDomain` Submodule" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceNetworkingPeeredDnsDomain <a name="DataGoogleServiceNetworkingPeeredDnsDomain" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/service_networking_peered_dns_domain google_service_networking_peered_dns_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleServiceNetworkingPeeredDnsDomain(Construct Scope, string Id, DataGoogleServiceNetworkingPeeredDnsDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig">DataGoogleServiceNetworkingPeeredDnsDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig">DataGoogleServiceNetworkingPeeredDnsDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleServiceNetworkingPeeredDnsDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleServiceNetworkingPeeredDnsDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleServiceNetworkingPeeredDnsDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleServiceNetworkingPeeredDnsDomain.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleServiceNetworkingPeeredDnsDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleServiceNetworkingPeeredDnsDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleServiceNetworkingPeeredDnsDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleServiceNetworkingPeeredDnsDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/service_networking_peered_dns_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleServiceNetworkingPeeredDnsDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffix">DnsSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DnsSuffix`<sup>Required</sup> <a name="DnsSuffix" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffix"></a>

```csharp
public string DnsSuffix { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceNetworkingPeeredDnsDomainConfig <a name="DataGoogleServiceNetworkingPeeredDnsDomainConfig" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleServiceNetworkingPeeredDnsDomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Network,
    string Project,
    string Service,
    string DeletionPolicy = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/service_networking_peered_dns_domain#name DataGoogleServiceNetworkingPeeredDnsDomain#name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.network">Network</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/service_networking_peered_dns_domain#network DataGoogleServiceNetworkingPeeredDnsDomain#network}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/service_networking_peered_dns_domain#project DataGoogleServiceNetworkingPeeredDnsDomain#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.service">Service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/service_networking_peered_dns_domain#service DataGoogleServiceNetworkingPeeredDnsDomain#service}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/service_networking_peered_dns_domain#id DataGoogleServiceNetworkingPeeredDnsDomain#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/service_networking_peered_dns_domain#name DataGoogleServiceNetworkingPeeredDnsDomain#name}.

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/service_networking_peered_dns_domain#network DataGoogleServiceNetworkingPeeredDnsDomain#network}.

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/service_networking_peered_dns_domain#project DataGoogleServiceNetworkingPeeredDnsDomain#project}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/service_networking_peered_dns_domain#service DataGoogleServiceNetworkingPeeredDnsDomain#service}.

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/service_networking_peered_dns_domain#deletion_policy DataGoogleServiceNetworkingPeeredDnsDomain#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/service_networking_peered_dns_domain#id DataGoogleServiceNetworkingPeeredDnsDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



