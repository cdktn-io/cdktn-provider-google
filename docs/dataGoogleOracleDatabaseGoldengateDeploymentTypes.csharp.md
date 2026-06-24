# `dataGoogleOracleDatabaseGoldengateDeploymentTypes` Submodule <a name="`dataGoogleOracleDatabaseGoldengateDeploymentTypes` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentTypes <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/oracle_database_goldengate_deployment_types google_oracle_database_goldengate_deployment_types}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentTypes(Construct Scope, string Id, DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig">DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig">DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentTypes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateDeploymentTypes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateDeploymentTypes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateDeploymentTypes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateDeploymentTypes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentTypes resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseGoldengateDeploymentTypes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseGoldengateDeploymentTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/oracle_database_goldengate_deployment_types#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseGoldengateDeploymentTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.goldengateDeploymentTypes">GoldengateDeploymentTypes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList">DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `GoldengateDeploymentTypes`<sup>Required</sup> <a name="GoldengateDeploymentTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.goldengateDeploymentTypes"></a>

```csharp
public DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList GoldengateDeploymentTypes { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList">DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig {
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
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/oracle_database_goldengate_deployment_types#id DataGoogleOracleDatabaseGoldengateDeploymentTypes#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/oracle_database_goldengate_deployment_types#location DataGoogleOracleDatabaseGoldengateDeploymentTypes#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/oracle_database_goldengate_deployment_types#id DataGoogleOracleDatabaseGoldengateDeploymentTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/oracle_database_goldengate_deployment_types#project DataGoogleOracleDatabaseGoldengateDeploymentTypes#project}

---

### DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.get"></a>

```csharp
private DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.connectionTypes">ConnectionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.defaultUsername">DefaultUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.oggVersion">OggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.sourceTechnologies">SourceTechnologies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.supportedCapabilities">SupportedCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.supportedTechnologiesUrl">SupportedTechnologiesUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.targetTechnologies">TargetTechnologies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes">DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `ConnectionTypes`<sup>Required</sup> <a name="ConnectionTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.connectionTypes"></a>

```csharp
public string[] ConnectionTypes { get; }
```

- *Type:* string[]

---

##### `DefaultUsername`<sup>Required</sup> <a name="DefaultUsername" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.defaultUsername"></a>

```csharp
public string DefaultUsername { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OggVersion`<sup>Required</sup> <a name="OggVersion" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.oggVersion"></a>

```csharp
public string OggVersion { get; }
```

- *Type:* string

---

##### `SourceTechnologies`<sup>Required</sup> <a name="SourceTechnologies" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.sourceTechnologies"></a>

```csharp
public string[] SourceTechnologies { get; }
```

- *Type:* string[]

---

##### `SupportedCapabilities`<sup>Required</sup> <a name="SupportedCapabilities" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.supportedCapabilities"></a>

```csharp
public string[] SupportedCapabilities { get; }
```

- *Type:* string[]

---

##### `SupportedTechnologiesUrl`<sup>Required</sup> <a name="SupportedTechnologiesUrl" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.supportedTechnologiesUrl"></a>

```csharp
public string SupportedTechnologiesUrl { get; }
```

- *Type:* string

---

##### `TargetTechnologies`<sup>Required</sup> <a name="TargetTechnologies" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.targetTechnologies"></a>

```csharp
public string[] TargetTechnologies { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes">DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes</a>

---



