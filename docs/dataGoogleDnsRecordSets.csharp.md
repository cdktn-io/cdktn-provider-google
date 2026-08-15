# `dataGoogleDnsRecordSets` Submodule <a name="`dataGoogleDnsRecordSets` Submodule" id="@cdktn/provider-google.dataGoogleDnsRecordSets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDnsRecordSets <a name="DataGoogleDnsRecordSets" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/dns_record_sets google_dns_record_sets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDnsRecordSets(Construct Scope, string Id, DataGoogleDnsRecordSetsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig">DataGoogleDnsRecordSetsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig">DataGoogleDnsRecordSetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleDnsRecordSets resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleDnsRecordSets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleDnsRecordSets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleDnsRecordSets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleDnsRecordSets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleDnsRecordSets resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleDnsRecordSets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleDnsRecordSets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/dns_record_sets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleDnsRecordSets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.rrsets">Rrsets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList">DataGoogleDnsRecordSetsRrsetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.managedZoneInput">ManagedZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.managedZone">ManagedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Rrsets`<sup>Required</sup> <a name="Rrsets" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.rrsets"></a>

```csharp
public DataGoogleDnsRecordSetsRrsetsList Rrsets { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList">DataGoogleDnsRecordSetsRrsetsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedZoneInput`<sup>Optional</sup> <a name="ManagedZoneInput" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.managedZoneInput"></a>

```csharp
public string ManagedZoneInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedZone`<sup>Required</sup> <a name="ManagedZone" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.managedZone"></a>

```csharp
public string ManagedZone { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDnsRecordSetsConfig <a name="DataGoogleDnsRecordSetsConfig" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDnsRecordSetsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ManagedZone,
    string Id = null,
    string Name = null,
    string Project = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.managedZone">ManagedZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/dns_record_sets#managed_zone DataGoogleDnsRecordSets#managed_zone}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/dns_record_sets#id DataGoogleDnsRecordSets#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/dns_record_sets#name DataGoogleDnsRecordSets#name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/dns_record_sets#project DataGoogleDnsRecordSets#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/dns_record_sets#type DataGoogleDnsRecordSets#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ManagedZone`<sup>Required</sup> <a name="ManagedZone" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.managedZone"></a>

```csharp
public string ManagedZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/dns_record_sets#managed_zone DataGoogleDnsRecordSets#managed_zone}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/dns_record_sets#id DataGoogleDnsRecordSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/dns_record_sets#name DataGoogleDnsRecordSets#name}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/dns_record_sets#project DataGoogleDnsRecordSets#project}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/dns_record_sets#type DataGoogleDnsRecordSets#type}.

---

### DataGoogleDnsRecordSetsRrsets <a name="DataGoogleDnsRecordSetsRrsets" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDnsRecordSetsRrsets {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDnsRecordSetsRrsetsList <a name="DataGoogleDnsRecordSetsRrsetsList" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDnsRecordSetsRrsetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.get"></a>

```csharp
private DataGoogleDnsRecordSetsRrsetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDnsRecordSetsRrsetsOutputReference <a name="DataGoogleDnsRecordSetsRrsetsOutputReference" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDnsRecordSetsRrsetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsets">DataGoogleDnsRecordSetsRrsets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Rrdatas`<sup>Required</sup> <a name="Rrdatas" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; }
```

- *Type:* string[]

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsetsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDnsRecordSetsRrsets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDnsRecordSets.DataGoogleDnsRecordSetsRrsets">DataGoogleDnsRecordSetsRrsets</a>

---



