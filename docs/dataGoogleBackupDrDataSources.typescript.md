# `dataGoogleBackupDrDataSources` Submodule <a name="`dataGoogleBackupDrDataSources` Submodule" id="@cdktn/provider-google.dataGoogleBackupDrDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrDataSources <a name="DataGoogleBackupDrDataSources" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/backup_dr_data_sources google_backup_dr_data_sources}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources(scope: Construct, id: string, config: DataGoogleBackupDrDataSourcesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig">DataGoogleBackupDrDataSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig">DataGoogleBackupDrDataSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOrderBy"></a>

```typescript
public resetOrderBy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBackupDrDataSources resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleBackupDrDataSources resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBackupDrDataSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBackupDrDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/backup_dr_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList">DataGoogleBackupDrDataSourcesDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultIdInput">backupVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderByInput">orderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultId">backupVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderBy">orderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dataSources"></a>

```typescript
public readonly dataSources: DataGoogleBackupDrDataSourcesDataSourcesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList">DataGoogleBackupDrDataSourcesDataSourcesList</a>

---

##### `backupVaultIdInput`<sup>Optional</sup> <a name="backupVaultIdInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultIdInput"></a>

```typescript
public readonly backupVaultIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderByInput"></a>

```typescript
public readonly orderByInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultId"></a>

```typescript
public readonly backupVaultId: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrDataSourcesConfig <a name="DataGoogleBackupDrDataSourcesConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

const dataGoogleBackupDrDataSourcesConfig: dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.backupVaultId">backupVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/backup_dr_data_sources#backup_vault_id DataGoogleBackupDrDataSources#backup_vault_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/backup_dr_data_sources#location DataGoogleBackupDrDataSources#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.filter">filter</a></code> | <code>string</code> | The filter to apply to list results. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/backup_dr_data_sources#id DataGoogleBackupDrDataSources#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.orderBy">orderBy</a></code> | <code>string</code> | The order to sort results by. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/backup_dr_data_sources#project DataGoogleBackupDrDataSources#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.backupVaultId"></a>

```typescript
public readonly backupVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/backup_dr_data_sources#backup_vault_id DataGoogleBackupDrDataSources#backup_vault_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/backup_dr_data_sources#location DataGoogleBackupDrDataSources#location}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

The filter to apply to list results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/backup_dr_data_sources#filter DataGoogleBackupDrDataSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/backup_dr_data_sources#id DataGoogleBackupDrDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

The order to sort results by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/backup_dr_data_sources#order_by DataGoogleBackupDrDataSources#order_by}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/backup_dr_data_sources#project DataGoogleBackupDrDataSources#project}.

---

### DataGoogleBackupDrDataSourcesDataSources <a name="DataGoogleBackupDrDataSourcesDataSources" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

const dataGoogleBackupDrDataSourcesDataSources: dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources = { ... }
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

const dataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo: dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo = { ... }
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

const dataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig: dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig = { ... }
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

const dataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig: dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig = { ... }
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

const dataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication: dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication = { ... }
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

const dataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource: dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource = { ... }
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

const dataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties: dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId">backupApplianceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName">backupApplianceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId">slaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName">slpName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName">sltName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `backupApplianceId`<sup>Required</sup> <a name="backupApplianceId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId"></a>

```typescript
public readonly backupApplianceId: string;
```

- *Type:* string

---

##### `backupApplianceName`<sup>Required</sup> <a name="backupApplianceName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName"></a>

```typescript
public readonly backupApplianceName: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `slaId`<sup>Required</sup> <a name="slaId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId"></a>

```typescript
public readonly slaId: string;
```

- *Type:* string

---

##### `slpName`<sup>Required</sup> <a name="slpName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName"></a>

```typescript
public readonly slpName: string;
```

- *Type:* string

---

##### `sltName`<sup>Required</sup> <a name="sltName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName"></a>

```typescript
public readonly sltName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan">backupPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation">backupPlanAssociation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription">backupPlanDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules">backupPlanRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan"></a>

```typescript
public readonly backupPlan: string;
```

- *Type:* string

---

##### `backupPlanAssociation`<sup>Required</sup> <a name="backupPlanAssociation" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation"></a>

```typescript
public readonly backupPlanAssociation: string;
```

- *Type:* string

---

##### `backupPlanDescription`<sup>Required</sup> <a name="backupPlanDescription" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription"></a>

```typescript
public readonly backupPlanDescription: string;
```

- *Type:* string

---

##### `backupPlanRules`<sup>Required</sup> <a name="backupPlanRules" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules"></a>

```typescript
public readonly backupPlanRules: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.backupApplianceBackupConfig">backupApplianceBackupConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.gcpBackupConfig">gcpBackupConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupError">lastBackupError</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupState">lastBackupState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime">lastSuccessfulBackupConsistencyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupApplianceBackupConfig`<sup>Required</sup> <a name="backupApplianceBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.backupApplianceBackupConfig"></a>

```typescript
public readonly backupApplianceBackupConfig: DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList</a>

---

##### `gcpBackupConfig`<sup>Required</sup> <a name="gcpBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.gcpBackupConfig"></a>

```typescript
public readonly gcpBackupConfig: DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList</a>

---

##### `lastBackupError`<sup>Required</sup> <a name="lastBackupError" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupError"></a>

```typescript
public readonly lastBackupError: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `lastBackupState`<sup>Required</sup> <a name="lastBackupState" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupState"></a>

```typescript
public readonly lastBackupState: string;
```

- *Type:* string

---

##### `lastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="lastSuccessfulBackupConsistencyTime" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime"></a>

```typescript
public readonly lastSuccessfulBackupConsistencyTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applianceId">applianceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance">backupAppliance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applianceId`<sup>Required</sup> <a name="applianceId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applianceId"></a>

```typescript
public readonly applianceId: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `backupAppliance`<sup>Required</sup> <a name="backupAppliance" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance"></a>

```typescript
public readonly backupAppliance: string;
```

- *Type:* string

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount">totalDiskCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb">totalDiskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `totalDiskCount`<sup>Required</sup> <a name="totalDiskCount" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount"></a>

```typescript
public readonly totalDiskCount: string;
```

- *Type:* string

---

##### `totalDiskSizeGb`<sup>Required</sup> <a name="totalDiskSizeGb" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb"></a>

```typescript
public readonly totalDiskSizeGb: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties">computeInstanceDataSourceProperties</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.gcpResourcename">gcpResourcename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeInstanceDataSourceProperties`<sup>Required</sup> <a name="computeInstanceDataSourceProperties" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties"></a>

```typescript
public readonly computeInstanceDataSourceProperties: DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a>

---

##### `gcpResourcename`<sup>Required</sup> <a name="gcpResourcename" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.gcpResourcename"></a>

```typescript
public readonly gcpResourcename: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesList <a name="DataGoogleBackupDrDataSourcesDataSourcesList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrDataSourcesDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrDataSourcesDataSourcesOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrDataSources } from '@cdktn/provider-google'

new dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupBlockedByVaultAccessRestriction">backupBlockedByVaultAccessRestriction</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupConfigInfo">backupConfigInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupCount">backupCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.configState">configState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceBackupApplianceApplication">dataSourceBackupApplianceApplication</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceGcpResource">dataSourceGcpResource</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.totalStoredBytes">totalStoredBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources">DataGoogleBackupDrDataSourcesDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupBlockedByVaultAccessRestriction`<sup>Required</sup> <a name="backupBlockedByVaultAccessRestriction" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupBlockedByVaultAccessRestriction"></a>

```typescript
public readonly backupBlockedByVaultAccessRestriction: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `backupConfigInfo`<sup>Required</sup> <a name="backupConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupConfigInfo"></a>

```typescript
public readonly backupConfigInfo: DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList</a>

---

##### `backupCount`<sup>Required</sup> <a name="backupCount" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupCount"></a>

```typescript
public readonly backupCount: string;
```

- *Type:* string

---

##### `configState`<sup>Required</sup> <a name="configState" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.configState"></a>

```typescript
public readonly configState: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataSourceBackupApplianceApplication`<sup>Required</sup> <a name="dataSourceBackupApplianceApplication" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceBackupApplianceApplication"></a>

```typescript
public readonly dataSourceBackupApplianceApplication: DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList</a>

---

##### `dataSourceGcpResource`<sup>Required</sup> <a name="dataSourceGcpResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceGcpResource"></a>

```typescript
public readonly dataSourceGcpResource: DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `totalStoredBytes`<sup>Required</sup> <a name="totalStoredBytes" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.totalStoredBytes"></a>

```typescript
public readonly totalStoredBytes: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrDataSourcesDataSources;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources">DataGoogleBackupDrDataSourcesDataSources</a>

---



