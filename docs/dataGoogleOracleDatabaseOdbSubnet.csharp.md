# `dataGoogleOracleDatabaseOdbSubnet` Submodule <a name="`dataGoogleOracleDatabaseOdbSubnet` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseOdbSubnet <a name="DataGoogleOracleDatabaseOdbSubnet" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/oracle_database_odb_subnet google_oracle_database_odb_subnet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseOdbSubnet(Construct Scope, string Id, DataGoogleOracleDatabaseOdbSubnetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig">DataGoogleOracleDatabaseOdbSubnetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig">DataGoogleOracleDatabaseOdbSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseOdbSubnet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseOdbSubnet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseOdbSubnet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseOdbSubnet.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseOdbSubnet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseOdbSubnet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseOdbSubnet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseOdbSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/oracle_database_odb_subnet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseOdbSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.cidrRange">CidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.deletionProtection">DeletionProtection</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.labels">Labels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.purpose">Purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.odbnetworkInput">OdbnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.odbSubnetIdInput">OdbSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.odbnetwork">Odbnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.odbSubnetId">OdbSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CidrRange`<sup>Required</sup> <a name="CidrRange" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.cidrRange"></a>

```csharp
public string CidrRange { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.deletionProtection"></a>

```csharp
public IResolvable DeletionProtection { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.purpose"></a>

```csharp
public string Purpose { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OdbnetworkInput`<sup>Optional</sup> <a name="OdbnetworkInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.odbnetworkInput"></a>

```csharp
public string OdbnetworkInput { get; }
```

- *Type:* string

---

##### `OdbSubnetIdInput`<sup>Optional</sup> <a name="OdbSubnetIdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.odbSubnetIdInput"></a>

```csharp
public string OdbSubnetIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Odbnetwork`<sup>Required</sup> <a name="Odbnetwork" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.odbnetwork"></a>

```csharp
public string Odbnetwork { get; }
```

- *Type:* string

---

##### `OdbSubnetId`<sup>Required</sup> <a name="OdbSubnetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.odbSubnetId"></a>

```csharp
public string OdbSubnetId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseOdbSubnetConfig <a name="DataGoogleOracleDatabaseOdbSubnetConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseOdbSubnetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Odbnetwork,
    string OdbSubnetId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.odbnetwork">Odbnetwork</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.odbSubnetId">OdbSubnetId</a></code> | <code>string</code> | The ID of the OdbSubnet to create. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/oracle_database_odb_subnet#id DataGoogleOracleDatabaseOdbSubnet#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/oracle_database_odb_subnet#project DataGoogleOracleDatabaseOdbSubnet#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/oracle_database_odb_subnet#location DataGoogleOracleDatabaseOdbSubnet#location}

---

##### `Odbnetwork`<sup>Required</sup> <a name="Odbnetwork" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.odbnetwork"></a>

```csharp
public string Odbnetwork { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/oracle_database_odb_subnet#odbnetwork DataGoogleOracleDatabaseOdbSubnet#odbnetwork}

---

##### `OdbSubnetId`<sup>Required</sup> <a name="OdbSubnetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.odbSubnetId"></a>

```csharp
public string OdbSubnetId { get; set; }
```

- *Type:* string

The ID of the OdbSubnet to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/oracle_database_odb_subnet#odb_subnet_id DataGoogleOracleDatabaseOdbSubnet#odb_subnet_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/oracle_database_odb_subnet#id DataGoogleOracleDatabaseOdbSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbSubnet.DataGoogleOracleDatabaseOdbSubnetConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/oracle_database_odb_subnet#project DataGoogleOracleDatabaseOdbSubnet#project}.

---



