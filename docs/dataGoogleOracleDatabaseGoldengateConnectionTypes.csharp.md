# `dataGoogleOracleDatabaseGoldengateConnectionTypes` Submodule <a name="`dataGoogleOracleDatabaseGoldengateConnectionTypes` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseGoldengateConnectionTypes <a name="DataGoogleOracleDatabaseGoldengateConnectionTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/oracle_database_goldengate_connection_types google_oracle_database_goldengate_connection_types}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateConnectionTypes(Construct Scope, string Id, DataGoogleOracleDatabaseGoldengateConnectionTypesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig">DataGoogleOracleDatabaseGoldengateConnectionTypesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig">DataGoogleOracleDatabaseGoldengateConnectionTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateConnectionTypes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateConnectionTypes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateConnectionTypes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateConnectionTypes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateConnectionTypes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateConnectionTypes resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseGoldengateConnectionTypes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseGoldengateConnectionTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/oracle_database_goldengate_connection_types#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseGoldengateConnectionTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.goldengateConnectionTypes">GoldengateConnectionTypes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList">DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `GoldengateConnectionTypes`<sup>Required</sup> <a name="GoldengateConnectionTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.goldengateConnectionTypes"></a>

```csharp
public DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList GoldengateConnectionTypes { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList">DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseGoldengateConnectionTypesConfig <a name="DataGoogleOracleDatabaseGoldengateConnectionTypesConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateConnectionTypesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/oracle_database_goldengate_connection_types#id DataGoogleOracleDatabaseGoldengateConnectionTypes#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/oracle_database_goldengate_connection_types#location DataGoogleOracleDatabaseGoldengateConnectionTypes#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/oracle_database_goldengate_connection_types#id DataGoogleOracleDatabaseGoldengateConnectionTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/oracle_database_goldengate_connection_types#project DataGoogleOracleDatabaseGoldengateConnectionTypes#project}

---

### DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes <a name="DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList <a name="DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.get"></a>

```csharp
private DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference <a name="DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.technologyTypes">TechnologyTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes">DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TechnologyTypes`<sup>Required</sup> <a name="TechnologyTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.technologyTypes"></a>

```csharp
public string[] TechnologyTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateConnectionTypes.DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes">DataGoogleOracleDatabaseGoldengateConnectionTypesGoldengateConnectionTypes</a>

---



