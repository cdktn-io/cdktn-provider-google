# `dataGoogleOracleDatabaseExascaleDbStorageVault` Submodule <a name="`dataGoogleOracleDatabaseExascaleDbStorageVault` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVault <a name="DataGoogleOracleDatabaseExascaleDbStorageVault" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault google_oracle_database_exascale_db_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault(scope: Construct, id: string, config: DataGoogleOracleDatabaseExascaleDbStorageVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig">DataGoogleOracleDatabaseExascaleDbStorageVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig">DataGoogleOracleDatabaseExascaleDbStorageVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isConstruct"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isTerraformDataSource"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseExascaleDbStorageVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseExascaleDbStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseExascaleDbStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtection">deletionProtection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.exadataInfrastructure">exadataInfrastructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput">exascaleDbStorageVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `exadataInfrastructure`<sup>Required</sup> <a name="exadataInfrastructure" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.exadataInfrastructure"></a>

```typescript
public readonly exadataInfrastructure: string;
```

- *Type:* string

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.properties"></a>

```typescript
public readonly properties: DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `exascaleDbStorageVaultIdInput`<sup>Optional</sup> <a name="exascaleDbStorageVaultIdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput"></a>

```typescript
public readonly exascaleDbStorageVaultIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId"></a>

```typescript
public readonly exascaleDbStorageVaultId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVaultConfig <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

const dataGoogleOracleDatabaseExascaleDbStorageVaultConfig: dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>string</code> | The ID of the ExascaleDbStorageVault to create. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#id DataGoogleOracleDatabaseExascaleDbStorageVault#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#project DataGoogleOracleDatabaseExascaleDbStorageVault#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId"></a>

```typescript
public readonly exascaleDbStorageVaultId: string;
```

- *Type:* string

The ID of the ExascaleDbStorageVault to create.

This value is
restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#exascale_db_storage_vault_id DataGoogleOracleDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#location DataGoogleOracleDatabaseExascaleDbStorageVault#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#id DataGoogleOracleDatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_exascale_db_storage_vault#project DataGoogleOracleDatabaseExascaleDbStorageVault#project}.

---

### DataGoogleOracleDatabaseExascaleDbStorageVaultProperties <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultProperties" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultProperties.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

const dataGoogleOracleDatabaseExascaleDbStorageVaultProperties: dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultProperties = { ... }
```


### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

const dataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails: dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails = { ... }
```


### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

const dataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone: dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs">availableSizeGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs">totalSizeGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableSizeGbs`<sup>Required</sup> <a name="availableSizeGbs" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs"></a>

```typescript
public readonly availableSizeGbs: number;
```

- *Type:* number

---

##### `totalSizeGbs`<sup>Required</sup> <a name="totalSizeGbs" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs"></a>

```typescript
public readonly totalSizeGbs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent">additionalFlashCachePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes">attachedShapeAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes">availableShapeAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails">exascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri">ociUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount">vmClusterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds">vmClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultProperties">DataGoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalFlashCachePercent`<sup>Required</sup> <a name="additionalFlashCachePercent" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent"></a>

```typescript
public readonly additionalFlashCachePercent: number;
```

- *Type:* number

---

##### `attachedShapeAttributes`<sup>Required</sup> <a name="attachedShapeAttributes" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes"></a>

```typescript
public readonly attachedShapeAttributes: string[];
```

- *Type:* string[]

---

##### `availableShapeAttributes`<sup>Required</sup> <a name="availableShapeAttributes" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes"></a>

```typescript
public readonly availableShapeAttributes: string[];
```

- *Type:* string[]

---

##### `exascaleDbStorageDetails`<sup>Required</sup> <a name="exascaleDbStorageDetails" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails"></a>

```typescript
public readonly exascaleDbStorageDetails: DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociUri`<sup>Required</sup> <a name="ociUri" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri"></a>

```typescript
public readonly ociUri: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList</a>

---

##### `vmClusterCount`<sup>Required</sup> <a name="vmClusterCount" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount"></a>

```typescript
public readonly vmClusterCount: number;
```

- *Type:* number

---

##### `vmClusterIds`<sup>Required</sup> <a name="vmClusterIds" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds"></a>

```typescript
public readonly vmClusterIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseExascaleDbStorageVaultProperties;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultProperties">DataGoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVault.DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">DataGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---



