# `dataGoogleOracleDatabaseOdbDnsZone` Submodule <a name="`dataGoogleOracleDatabaseOdbDnsZone` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseOdbDnsZone <a name="DataGoogleOracleDatabaseOdbDnsZone" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone google_oracle_database_odb_dns_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseOdbDnsZone(Construct Scope, string Id, DataGoogleOracleDatabaseOdbDnsZoneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig">DataGoogleOracleDatabaseOdbDnsZoneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig">DataGoogleOracleDatabaseOdbDnsZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseOdbDnsZone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseOdbDnsZone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseOdbDnsZone.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseOdbDnsZone.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseOdbDnsZone to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseOdbDnsZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseOdbDnsZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionProtection">DeletionProtection</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.labels">Labels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput">OdbDnsZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetworkInput">OdbnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneId">OdbDnsZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetwork">Odbnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionProtection"></a>

```csharp
public IResolvable DeletionProtection { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OdbDnsZoneIdInput`<sup>Optional</sup> <a name="OdbDnsZoneIdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput"></a>

```csharp
public string OdbDnsZoneIdInput { get; }
```

- *Type:* string

---

##### `OdbnetworkInput`<sup>Optional</sup> <a name="OdbnetworkInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetworkInput"></a>

```csharp
public string OdbnetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OdbDnsZoneId`<sup>Required</sup> <a name="OdbDnsZoneId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneId"></a>

```csharp
public string OdbDnsZoneId { get; }
```

- *Type:* string

---

##### `Odbnetwork`<sup>Required</sup> <a name="Odbnetwork" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetwork"></a>

```csharp
public string Odbnetwork { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseOdbDnsZoneConfig <a name="DataGoogleOracleDatabaseOdbDnsZoneConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseOdbDnsZoneConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string OdbDnsZoneId,
    string Odbnetwork,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId">OdbDnsZoneId</a></code> | <code>string</code> | The ID of the OdbDnsZone to create. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbnetwork">Odbnetwork</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#id DataGoogleOracleDatabaseOdbDnsZone#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#project DataGoogleOracleDatabaseOdbDnsZone#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `OdbDnsZoneId`<sup>Required</sup> <a name="OdbDnsZoneId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId"></a>

```csharp
public string OdbDnsZoneId { get; set; }
```

- *Type:* string

The ID of the OdbDnsZone to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#odb_dns_zone_id DataGoogleOracleDatabaseOdbDnsZone#odb_dns_zone_id}

---

##### `Odbnetwork`<sup>Required</sup> <a name="Odbnetwork" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbnetwork"></a>

```csharp
public string Odbnetwork { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#odbnetwork DataGoogleOracleDatabaseOdbDnsZone#odbnetwork}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#id DataGoogleOracleDatabaseOdbDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#location DataGoogleOracleDatabaseOdbDnsZone#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#project DataGoogleOracleDatabaseOdbDnsZone#project}.

---



